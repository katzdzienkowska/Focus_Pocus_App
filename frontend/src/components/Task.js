import React from 'react';

const Task = ({task, removeTask}) => {

  const handleDelete = () => {
    removeTask(task.id)
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