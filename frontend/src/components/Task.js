import React from 'react';
import {deleteTask} from '../service/FocusPocusService';

const Task = ({task, removeTask}) => {

  console.log(task);
  const handleDelete = () => {
    deleteTask(task.id)
    .then(() => {
      removeTask(task.id);
    });
  };

  return (
    <div>
      <h1>{task.text}</h1>
      <p>{task.priority}</p>
      <button>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;