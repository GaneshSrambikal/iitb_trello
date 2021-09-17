import React,{useState,useEffect,useRef} from 'react'
import Card from '../cards/Card'
import CardPlaceholder from '../cards/CardPlaceholder'

const Doing = ({data, deleteCard}) => {
    const [doing, setDoing] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [listLength,setListLength]=useState(null)
    let container = useRef();

    useEffect(()=>{
      getAllDoing(data)
      container.current.addEventListener('dragover',(e) =>{
        e.preventDefault()
        const draggable = document.querySelector('.dragging')
        let curCard =  JSON.parse(draggable.childNodes[0].getAttribute('data-bs-formdata'))
        editStatus(curCard.id)
            
        container.current.appendChild(draggable)
        setListLength(container.current.childNodes.length)
      })

      container.current.addEventListener('dragend',(e)=>{
        e.preventDefault()
        setTimeout(()=>{ window.location.reload() },0)
      })  
    },[data])

    const getAllDoing = (data) =>{
      setIsLoading(true)
      let allDoing = data && data.filter(data => data.status === 'doing')
      setDoing(allDoing)
      setTimeout(()=>{ setIsLoading(false) },500)
    }

    const editStatus =(id)=>{
      let datalist = localStorage.getItem('localtask');
      let dataObj = (datalist == null) ? [] : JSON.parse(datalist)
      let curTaskIndex = dataObj.findIndex(obj => obj.id === id)
      dataObj[curTaskIndex].status = 'doing';
      localStorage.setItem("localtask", JSON.stringify(dataObj))
    }

    return (
        <div className="col">               
          <ul className="list-unstyled drop-down-list">
            <li className="mb-1">
              <button
                id="col-one" 
                className="btn bg-info bg-gradient text-white container dropdown d-flex justify-content-between align-items-center rounded collasped shadow"
                data-bs-toggle="collapse"
                data-bs-target="#doing-list"
                aria-expanded="true"
                >
                <div 
                id="col-one-arrow" 
                className="d-flex justify-content-between align-items-center list-collapse">
                  <i className="bi bi-chevron-down mx-2"></i>
                  <h5>Doing</h5>
                </div>
                <span className="badge bg-white text-secondary rounded-circle">
                {listLength ? listLength : doing.length}
                </span>
              </button>
              <div className="collapse show rounded-2" id="doing-list">
                <ul className="list-unstyled">
                  {(doing.length === 0) ?
                    <li 
                      id="todo-list" 
                      ref={container} 
                      data-bs-toggle="collapse" 
                      dat-bs-target="#dragModal" 
                      className="mt-2 p-2 rounded overflow-auto collapse-container shadow" 
                      style={{height: '250px'}}>                            
                       <h6 className="text-center text-muted mt-5">Nothing here..</h6>
                       <p className=" text-center text-muted m-1 fst-italic mt-2">Add/drag and drop below to add</p>
                    </li>
                           
                    :
                    <li 
                     id="todo-list" 
                     ref={container} 
                     data-bs-toggle="collapse" 
                     dat-bs-target="#dragModal" 
                     className="mt-2 p-2 rounded overflow-auto collapse-container shadow" 
                     style={{maxHeight: '450px'}}>                            
                      {isLoading ?
                      <CardPlaceholder />
                      :
                      doing.map(todo => 
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

export default Doing
