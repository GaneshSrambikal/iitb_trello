import React, {useState,useRef,useEffect} from 'react'

const EditModal = (props) => {
  const [taskId, setTaskId] = useState(null)
  const [title, setTitle] = useState('');
  const [desp, setDesp] = useState({value: ''})
  const [status, setStatus] = useState('todo');
  const editModal = useRef();
  let inputTitle = useRef();
  let textDesp = useRef();
  let titleErr = useRef();
  let despErr = useRef();
  let successMsg = useRef();
  
  useEffect(()=>{
    editModal.current.addEventListener('show.bs.modal', function (event) {
      // Button that triggered the modal
      var button = event.relatedTarget
      // Extract info from data-bs-* attributes
      let formdata = JSON.parse(button.getAttribute('data-bs-formdata'))
      autoFillForm(formdata)
    })
  },[])

  const autoFillForm = (data) =>{
    setTaskId(data.id)
    setTitle(data.title)
    setDesp({value:data.desp})
    setStatus(data.status)
  }
  const handleTitle =(e)=>{
    titleErr.current.textContent = '';
    successMsg.current.textContent = '';
    setTitle(e.target.value)
  }
  const handleDesp = (e) =>{
    despErr.current.textContent = '';
    setDesp({value : e.target.value})
  }
  const handleSelect =(e)=>{
      setStatus(e.target.value)
  }

  function titleAlert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  
    titleErr.current.append(wrapper)
  }
  function despAlert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    despErr.current.append(wrapper)
  }
  function successAlert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    successMsg.current.append(wrapper)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(title)
    let rexg = /[0-9]/;
    if(title.length === 0){
      titleAlert('title required!', 'danger')
    }
    if(rexg.test(title)){
      titleAlert('title should only contain alphabets!','warning')
    }
    if(desp.value.length === 0){
      despAlert('description required!','danger')
    } 
    else if(desp.value.length < 25){
      despAlert('description should be minimum 25 character long!','warning')
    }
    
    if(rexg.test(title) === false && title.length > 0 && (desp.value.length > 0 && desp.value.length >= 25)){
      let datalist = localStorage.getItem('localtask');
      let dataObj = (datalist == null) ? [] : JSON.parse(datalist)
      let updatedTask = {id:taskId,'title':title,'desp':desp,'status':status}
      let curTaskIndex = dataObj.findIndex(obj => obj.id === taskId)
      dataObj[curTaskIndex]= updatedTask
      localStorage.setItem("localtask", JSON.stringify(dataObj))
      props.fetchAllData();
      successAlert('Edited successfully','success');
    }  
    
  }
  const clearFields =(e) =>{ 
    setTitle('')
    setDesp({value: ''})
    setStatus('todo')
    successMsg.current.textContent =''
    titleErr.current.textContent = ''
    despErr.current.textContent = ''

  }
    return (
        <div className="modal fade" id="editModal" ref={editModal}  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
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
                          <select value={status} className="formSelect" name="status" onChange={handleSelect}>
                              <option value="todo">Todo</option>
                              <option value="doing">Doing</option>
                              <option value="done">Done</option>
                            
                          </select>
                        </div>
                      </div>
                      <div className="mb-2 mt-3">
                      <button id="add-todo" type="button" className="btn btn-success" onClick={handleSubmit}>save changes</button>
                      <button type="button" className="btn btn-secondary mx-2" onClick={clearFields}>clear fields</button>
                      <button 
                            className="btn btn-danger mx-2"
                            data-bs-dismiss="modal" 
              
                            onClick={(e) => {e.preventDefault(); props.deleteCard(taskId)}}>Delete</button>
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

export default EditModal
