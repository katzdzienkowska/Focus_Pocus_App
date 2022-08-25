import React from 'react';
import {ITask, TaskId} from '../types/Tasks';
import {ICategory} from '../types/Categories';

interface ITaskProps extends ITask{
    categories: ICategory[];
    onToggleTask: (id: TaskId) => Promise<void>;
    onRemoveTask: (id: TaskId) => Promise<void>;
}

const TaskItem = ({id, text, priority, completed, categories, onToggleTask, onRemoveTask} : ITaskProps) => {


    return(
        <div>
            <h2>{text}</h2>
            <input type='checkbox' id='tick' checked={completed} onClick={(() => onToggleTask(id))}/>
            <button onClick={(() => onRemoveTask(id))}>Delete</button>
            <p>{priority}</p>
            // categories to be shown here - map method
        </div>
    );
};

export default TaskItem;