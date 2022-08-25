import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootStore} from '../store/Store';
import {addTask, editTask, unsetEdit} from '../store/TaskReducer';
import {TaskStatus} from '../types/Tasks';
import { v4 as uuidv4 } from 'uuid';


const AddTask: React.FC = () => {

    const dispatch = useDispatch();
    const {todo, doing, done, edit} = useSelector((store: RootStore) => store.tasks);

    const [taskText, setTaskText] = useState('');
    const [taskStatus, setTaskStatus] = useState('');

    useEffect(() => {
        if (edit) {
            setTaskText(edit.text);
            setTaskStatus(edit.status);
        }
    }, [edit]);

    const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const task = {
            id: edit ? edit.id : uuidv4(),
            text: taskText,
            status: taskStatus,
        };
        dispatch(edit ? editTask({task, previousStatus: edit.status}) : addTask(task));
        setTaskText('');
    };

    const cancelForm = () => {
        setTaskText('');
        setTaskStatus(TaskStatus.TODO)
        setTimeout(() => dispatch(unsetEdit()), 300);
    };


    return(
        <>
        <form onSubmit={(event) => handleAddTask(event)}>
            <h3>{edit? 'Edit Task' : 'Add New Task'}</h3>
            <label htmlFor='text'>Text</label>
            <input name='text' id='text' type='text' value={taskText} required onChange={(event) => setTaskText(event.target.value)}/>
            <label htmlFor='status'>Status</label>
            <select name='status' id='status' value={taskStatus} onChange={(event) => setTaskStatus(event.target.value as TaskStatus)}>
                <option value={TaskStatus.TODO}>To Do</option>
                <option value={TaskStatus.DOING}>Doing</option>
                <option value={TaskStatus.DONE}>Done</option>
            </select>
            <button type='submit'>{edit ? 'Update' : 'Save'}</button>
            <button onClick={() => cancelForm()}>Cancel</button>
        </form>
        <div >
            <button type='submit'>Add New Task</button>
        </div>
        // add later total tasks
        </>
    );
};

export default AddTask;