import React from 'react';

function Card({ title, description, due_date, status, buttonset }) {
    let statusClass = '';
    if (status === 'Pending') {
        statusClass = 'text-danger';
    } else if (status === 'In Progress') {
        statusClass = 'text-warning';
    } else if (status === 'Completed') {
        statusClass = 'text-success';
    }

    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className='row'>
                    <p className="card-text col-6">{due_date}</p>
                    <p className={`card-text col-6 ${statusClass}`}>{status}</p>
                </div>
                {buttonset}
            </div>
        </div>
    );
}

export default Card;
