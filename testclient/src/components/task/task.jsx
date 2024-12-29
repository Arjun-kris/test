import React, { useState, useEffect } from 'react';
import Card from '../card/card';
import axios from 'axios';
import './task.css';

function Task() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/tasks/`);
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const updateTask = async (id, updatedTask) => {
        try {
            await axios.put(`http://127.0.0.1:8000/tasks/${id}/`, updatedTask);
            fetchTasks();
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const deleteTask = async (id) => {
        const isConfirmed = window.confirm('Are you sure you want to delete this task?');
        if (isConfirmed) {
            try {
                await axios.delete(`http://127.0.0.1:8000/tasks/${id}/`);
                fetchTasks();
            } catch (error) {
                console.error('Error deleting task:', error);
            }
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className='container-fluid my-4'>
            <div className='container rounded p-4 bg-light'>
                <h1 className='text-center my-2'>Task Manager</h1>
                <div className="d-flex justify-content-center align-items-center m-4">
                    <a className="btn btn-secondary p-2 w-25" href="/addtask">Add New task</a>
                </div>
                <h3 className='mb-4'>Task List</h3>
                <div className='container-fluid'>
                    <div className="row">
                        {tasks.map((task) => (
                            <div key={task.id} className='col-md-4 mb-3'>
                                <Card
                                    title={task.title}
                                    description={task.description}
                                    due_date={task.due_date}
                                    status={task.status}
                                    buttonset={
                                        <div>
                                            <button className='btn btn-outline-secondary mb-2 mr-3' onClick={() => updateTask(task.id, { ...task, status: 'Completed' })}>
                                                Mark as Completed
                                            </button>
                                            <button className='btn btn-outline-danger mb-2' onClick={() => deleteTask(task.id)}>Delete</button>
                                        </div>
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;



