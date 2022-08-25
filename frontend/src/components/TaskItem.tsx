import {forwardRef} from 'react';
import { useDispatch } from 'react-redux';
import { Task} from '../types/Tasks';
import { setEdit, deleteTask } from '../store/TaskReducer';

interface ITaskProps {
    task: Task;
    ref: HTMLDivElement;
};

const TaskItem = forwardRef<HTMLDivElement, ITaskProps>((props, ref) => {

    const dispatch = useDispatch();

    return(
        <div>
            <p>{props.task.text}</p>
            <button onClick={() => {dispatch(setEdit(props.task))}}>Edit</button>
            <button onClick={() => {dispatch(deleteTask(props.task))}}>Delete</button>
        </div>
    );
});

export default TaskItem;