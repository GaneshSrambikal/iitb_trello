import React,{useRef,useEffect} from 'react'

const Card = (props) => {
  // this will set cards data to data-bs-formadata modal attribute 
 let formdata = {id: props.id,'title': props.title, 'desp': props.desp, 'status': props.status}
 let dragCard = useRef()  

 useEffect(()=>{
  //  when user start dragging a card set dragging and drops class to the current card
  dragCard.current.addEventListener('dragstart',()=>{
    dragCard.current.classList.add('dragging')
    dragCard.current.classList.add('drops')
  })
  
  // when the drag ends remove dragging and drops classes
  dragCard.current.addEventListener('dragend',()=>{
    dragCard.current.classList.remove('dragging')
    dragCard.current.classList.remove('drops')
  })
  
  },[])
  
  return (
      <div className="card mb-2  shadow draggable" ref={dragCard} draggable="true" >
            <div className="card-body" data-bs-toggle="modal" 
                  data-bs-target="#editModal"
                  data-bs-formdata={JSON.stringify(formdata)} >                                       
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text text-muted">{props.desp}</p>
            </div>
            <div className="card-footer cursor-normal">
            <div className="d-flex justify-content-end">
                <button  
                  className="btn btn-outline-success" 
                  data-bs-toggle="modal" 
                  data-bs-target="#editModal"
                  data-bs-formdata={JSON.stringify(formdata)} 
                  ><i className="bi bi-pencil-fill"></i></button>
                <button className="btn btn-outline-danger ms-2" onClick={()=> props.deleteCard(props.id)}><i className="bi bi-trash"></i></button>
              </div>
            </div>
        </div> 
  )
}

export default Card
