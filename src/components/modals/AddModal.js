import React, {useState ,useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';

const AddModal = ({fetchAllData}) => {
  const [title, setTitle] = useState('');
  const [desp, setDesp] = useState({value: ''})
  const [status, setStatus] = useState('todo');
  // excessive use of useRef here .which the react documents says not to , but thing are working here so !
  let addModal = useRef();
  let inputTitle = useRef();
  let textDesp = useRef();
  // to show error/success message on validation
  let titleErr = useRef();
  let despErr = useRef();
  let successMsg = useRef();
  
  // handles text(title) inputs
  const handleTitle =(e)=>{
    titleErr.current.textContent = '';
    successMsg.current.textContent = '';
    setTitle(e.target.value)
  }

  // handles text(descriptions) inputs
  const handleDesp = (e) =>{
    despErr.current.textContent = '';
    setDesp({value : e.target.value})
  }
  
  // // handles select options
  const handleSelect =(e)=>{
    setStatus(e.target.value)
  }

  // show title validation message
  function titleAlert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    titleErr.current.append(wrapper)
  }
  
  // show descriptioon validation message
  function despAlert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'  
    despErr.current.append(wrapper)
  }
  // show success validation message
  function successAlert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'  
    successMsg.current.append(wrapper)
  }
 
  // handles form submit
  const handleSubmit = (e) =>{
    e.preventDefault();
    // change if title has only alphabets
    let rexg = /[0-9]/;
    // validate title length if empty
    if(title.length === 0){
      titleAlert('title required!', 'danger')
    }
    // validate title alphabets only
    if(rexg.test(title)){
      titleAlert('title should only contain alphabets!','warning')
    }
    // validate description length if empty
    if(desp.value.length === 0){
      despAlert('description required!','danger')
    } 
    // validate description if it has minimum 25 characters
    else if(desp.value.length < 25){
      despAlert('description should be minimum 25 character long!','warning')
    }
    
    // if all the above validate work OK then do this
    if(rexg.test(title) === false && title.length > 0 && (desp.value.length > 0 && desp.value.length >= 25)){
      let datalist = localStorage.getItem('localtask');
      let dataObj = (datalist == null) ? [] : JSON.parse(datalist)
    
      // set the new object
      dataObj.push({id:uuidv4(),'title':title,'desp':desp,'status':status})
      localStorage.setItem("localtask", JSON.stringify(dataObj))
      clearFields();
      fetchAllData();
      // show success message
      successAlert('Added successfully','success');
    }  
    
  }
  // clears form fields
  const clearFields =(e) =>{ 
    setTitle('')
    setDesp({value: ''})
    setStatus('todo')
    successMsg.current.textContent =''
    titleErr.current.textContent = ''
    despErr.current.textContent = ''
  }
    return (
      <div className="modal" id="exampleModal" ref={addModal}  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Todo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clearFields}></button>
            </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <div id="titleErrorPlaceholder" ref={titleErr}></div>
                  <div ref={successMsg}></div>
              </div>
              <div className="mb-3">
                <label htmlFor="todo-title" className="col-form-label">Title:</label>
                <input type="text" name="title" ref={inputTitle} className="form-control" id="todo-title" onChange={handleTitle} value={title}/>
              </div>
              <div className="mb-3">
                <div id="despErrorPlaceholder" ref={despErr}></div>
              </div>
              <div className="mb-3">
                <label htmlFor="todo-desp"  className="col-form-label">Description:</label>
                <textarea name="desp" ref={textDesp} className="form-control" id="todo-desp" onChange={handleDesp} value={desp.value}/>
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="col-form-label">Status:</label>
                <div className="btn-group mx-2">
                  <select value={status} name="status" className="formSelect" onChange={handleSelect}>
                      <option value="todo">Todo</option>
                      <option value="doing">Doing</option>
                      <option value="done">Done</option>
                  </select>
                </div>
              </div>
              <div className="mb-2 mt-3">
              <button id="add-todo" type="button" className="btn btn-success" onClick={handleSubmit}>Add Todo</button>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clearFields}>Close</button>          
          </div>
        </div>
       </div>
      </div>
    )
}

export default AddModal
