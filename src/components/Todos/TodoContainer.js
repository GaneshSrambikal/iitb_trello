import React, {useState ,useEffect} from 'react'
import AddTodoButton from '../AddTodoButton'
import AddModal from '../modals/AddModal'
import EditModal from '../modals/EditModal'
import Doing from './Doing'
import Done from './Done'
import Todo from './Todo'

const TodoContainer = () => {
    const [data,setData] = useState([])
    useEffect(() =>{
        // fetch all data and store in data
        fetchAllData(); 
    },[])

    // will fetch all data from localStorage 
    const fetchAllData = () =>{
        let datalist = localStorage.getItem('localtask');
        // if data is empty set it to empty arr or parse it .
        let dataObj = (datalist == null) ? [] : JSON.parse(datalist)
        setData(dataObj)
    }
    
    // will delete selected todo with id as parameter
    const deleteCard = (id) =>{
        let task = localStorage.getItem('localtask');
        let taskObj = JSON.parse(task)
        // get all task except the one with the id mentioned
        taskObj = (taskObj.length === 0) ? [] : taskObj.filter(task => task.id !== id)
        localStorage.setItem('localtask', JSON.stringify(taskObj))
        // after delete we will call fetchAllData so that it reflect in it UI
        fetchAllData();
    }
    return (
        <>  
            {/* Modals */}
            <AddModal fetchAllData={fetchAllData}/>
            <EditModal fetchAllData={fetchAllData} deleteCard={deleteCard}/>
            {/* Add todo button */}
            <AddTodoButton />
            {/* this will be the "THREE COLUMN LIST having TODO, DOING, DONE" */}
            <div className="row gx-3 p-2">
                {/* TODO */}
                <Todo data={data} fetchAllData={fetchAllData} deleteCard={deleteCard} />
                {/* DOING */}
                <Doing data={data} fetchAllData={fetchAllData} deleteCard={deleteCard} />
                {/* DONE */}
                <Done data={data} fetchAllData={fetchAllData} deleteCard={deleteCard} />
            </div>
            
        </>
        
    )
    
}

export default TodoContainer
