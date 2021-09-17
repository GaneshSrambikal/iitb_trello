import React,{useState,useEffect ,useRef} from 'react'
import Card from '../cards/Card'
import CardPlaceholder from '../cards/CardPlaceholder';

const Todo = ({data, deleteCard}) => {
    // get a reference of the container where cards are going to be dragged and dropped.
    let container = useRef();

    const [todos,setTodos] =useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [listLength,setListLength]=useState(null)
    
    useEffect(()=>{
      // set all todo with status todo
        getAllTodo(data)
        // will add dragover event to the container
        // This will let us set and appendChild (which is the cards)
        container.current.addEventListener('dragover',(e) =>{
            e.preventDefault();
            // when the card is set to draggable and when it is in drag state 
            // it will have dragging class set
            const draggable = document.querySelector('.dragging')
            // this will get the data of the dragging card 
            // which helps to change status
            let curCard =  JSON.parse(draggable.childNodes[0].getAttribute('data-bs-formdata'))
            // edits the cards status 
            editStatus(curCard.id)
            // will set the count of how much cards the container has
            setListLength(container.current.childNodes.length)
            // finally append to the container
            container.current.appendChild(draggable)
          
        })
        // set dragend event
        container.current.addEventListener('dragend',(e)=>{
          e.preventDefault()
          // prevents from calling remove child from virtual dom 
          // because till here we have updated the dom but not reacts virtual dom
          // there may be an alternative solutiion to this but using this for now
          setTimeout(()=>{ window.location.reload() },0)          
        })
    },[data])

    // gets all todo task
    const getAllTodo = (data) =>{
      setIsLoading(true)
      let todo = data && data.filter(todo => todo.status === 'todo')
      setTodos(todo)
      setTimeout(()=>{ setIsLoading(false) },500) 
    }

    // edits status when drag has completed
    const editStatus = (id) =>{
      let datalist = localStorage.getItem('localtask');
      let dataObj = (datalist == null) ? [] : JSON.parse(datalist)
      let curTaskIndex = dataObj.findIndex(obj => obj.id === id)
      dataObj[curTaskIndex].status = 'todo';
      localStorage.setItem("localtask", JSON.stringify(dataObj))
    }
    return (
        <div className="col">
          <ul className="list-unstyled drop-down-list">
            <li className="mb-1">
              <button
              id="col-one" 
              className="btn btn-primary d-flex justify-content-between align-items-center container dropdown  rounded collasped shadow"
              data-bs-toggle="collapse"
              data-bs-target="#to-do-list"
              aria-expanded="true"
              >
                <div 
                  id="col-one-arrow" 
                  className="d-flex justify-content-between align-items-center list-collapse">
                  <i className="bi bi-chevron-down mx-2"></i>
                  <h5>To-do</h5>
                </div> 
                <span className="badge bg-white text-secondary rounded-circle">
                  {listLength ? listLength : todos.length}
                </span>
              </button>
              <div className="collapse show rounded-2" id="to-do-list">
                <ul className="list-unstyled">
                  {(todos.length === 0) ?
                    <li id="todo-list" 
                        ref={container} 
                        data-bs-toggle="collapse" 
                        dat-bs-target="#dragModal" 
                        className="mt-2 p-2 rounded overflow-auto collapse-container shadow" 
                        style={{height: '250px'}}> 
                        <h6 className="text-center text-muted mt-5">Nothing here..</h6>
                        <p className=" text-center text-muted m-1 fst-italic mt-2">Add/drag and drop below to add</p>                              
                    </li>
                           
                    :
                    <li id="todo-list" 
                        ref={container} 
                        data-bs-toggle="collapse" 
                        dat-bs-target="#dragModal" 
                        className="mt-2 p-2 rounded overflow-auto collapse-container shadow" 
                        style={{maxHeight: '450px'}}>                            
                      {
                        isLoading ?
                        <CardPlaceholder /> :
                        todos.map(todo => 
                              <Card 
                                  key={todo.id} 
                                  id={todo.id} 
                                  title={todo.title} 
                                  desp={todo.desp.value}
                                  status={todo.status} 
                                  deleteCard={deleteCard} 
                                  />)
                      }
                    </li>
                           
                  }
                </ul>
              </div>
            </li>
          </ul>
        </div>
    )
}

export default Todo
