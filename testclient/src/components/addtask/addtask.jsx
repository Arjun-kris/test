import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Addtask() {
    const navigate = useNavigate();
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        due_date: '',
        status: 'Pending',
    });

    const createTask = async () => {
        try {
            await axios.post(`http://127.0.0.1:8000/tasks/`, newTask);
            setNewTask({ title: '', description: '', due_date: '', status: 'Pending' });
            alert("Task added successfully!!!");
            navigate(`/`);
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };
    return (
        <div className='container-fluid my-4'>
            <div className='container rounded p-4 bg-light'>
                <h1 className='text-center'>Add Task</h1>
                <div className='mb-5'>
                    <h3>Create Task</h3>
                    <input
                        type="text"
                        className="form-control bg-light mb-3"
                        placeholder="Title"
                        value={newTask.title}
                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    />
                    <input
                        type="date"
                        className="form-control bg-light mb-3"
                        value={newTask.due_date}
                        onChange={(e) => setNewTask({ ...newTask, due_date: e.target.value })}
                    />
                    <textarea
                        placeholder="Description"
                        className="form-control bg-light mb-3"
                        value={newTask.description}
                        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    />
                    <div className="d-flex justify-content-center align-items-center m-4">
                        <button className="btn btn-secondary p-2 w-25" onClick={createTask}>Add Task</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Addtask;


