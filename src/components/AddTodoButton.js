import React from 'react'

const AddTodoButton = () => {
    return (
        <div className="d-flex justify-content-end p-2 btn-container">
                <button type="button" 
                className="btn btn-dark rounded-circle shadow d-flex justify-content-center align-items-center"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                    <i className="bi bi-plus-lg"></i>
                </button>
        </div>
    )
}

export default AddTodoButton
