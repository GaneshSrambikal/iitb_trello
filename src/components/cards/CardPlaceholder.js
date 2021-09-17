import React from 'react'

const CardPlaceholder = () => {
    return (
        <>
            <div className="card" aria-hidden="true">
            <div className="card-body">
            <button className="btn btn-secondary mx-2 p-2 disabled placeholder-glow col-7"></button>
            <button className="btn btn-secondary mx-2 mt-3 p-1 disabled placeholder-glow col-8"></button>
            <button className="btn btn-secondary mx-2 p-1 disabled placeholder-glow col-8"></button>
            <button className="btn btn-secondary mx-2 p-1 disabled placeholder-glow col-8"></button>
            </div>
            <div className="card-footer cursor-normal">
                <div className="d-flex justify-content-end">
                    <button className="btn btn-success mx-2 p-3 disabled placeholder-glow col-1"></button>
                    <button className="btn btn-danger mx-2 p-3 disabled placeholder-glow col-1"></button>
                </div>
            </div>
            </div>

            {/* <div class="card" aria-hidden="true">
            <div class="card-body">
            <button className="btn btn-secondary mx-2 p-2 disabled placeholder-glow col-7"></button>
            <button className="btn btn-secondary mx-2 mt-3 p-1 disabled placeholder-glow col-8"></button>
            <button className="btn btn-secondary mx-2 p-1 disabled placeholder-glow col-8"></button>
            <button className="btn btn-secondary mx-2 p-1 disabled placeholder-glow col-8"></button>
            </div>
            <div className="card-footer cursor-normal">
                <div className="d-flex justify-content-end">
                    <button className="btn btn-success mx-2 p-3 disabled placeholder-glow col-1"></button>
                    <button className="btn btn-danger mx-2 p-3 disabled placeholder-glow col-1"></button>
                </div>
            </div>
            </div>         */}
        </>
       )
}

export default CardPlaceholder
