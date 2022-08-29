import React from 'react';

const Task = ({ task, editTask, removeTask, setIsEditing, setCurrentTask }) => {


  const handleDelete = () => {
    removeTask(task.id)
  };

  const handleEdit = (task) => {
    setIsEditing(true)
    setCurrentTask({ ...task })
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

      <p>{task.complete ?
        <button onClick={handleComplete}>Completed</button>
        : <button onClick={handleComplete}>Uncompleted</button>}</p>

      <button onClick={() => handleEdit(task)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;