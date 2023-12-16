import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions';

const TaskForm = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(task));
        setTask('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
                <input className='p-2 rounded border ' style={{width:500}}
                    type='text'
                    placeholder='Add Task'
                    value={task}
                    onChange={(e) => setTask(e.target.value)} />
                <button className='btn btn-primary py-2' type='submit'>Add Task</button>
            </form> <br />
        </div>
    );
};


export default TaskForm;