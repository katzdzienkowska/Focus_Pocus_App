import React from 'react';

const Task = ({task, editTask, removeTask}) => {

  const handleDelete = () => {
    removeTask(task.id)
  };

  const handleComplete = () => {
    editTask({
      id: task.id,
      text: task.text,
      priority: task.priority,
      complete: !task.complete
    });
  };


  return (
    <div>
      <h1>{task.text}</h1>
      <p>{task.priority}</p>
      <p>{task.complete ? <button onClick={handleComplete}>Completed</button> : <button onClick={handleComplete}>Uncompleted</button>}</p>
      <button>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;