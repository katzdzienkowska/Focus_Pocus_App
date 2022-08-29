import React from 'react';
import { Draggable } from "react-beautiful-dnd";

const Task = ({id, task, editTask, removeTask, setIsEditing, setCurrentTask, index }) => {


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
      <Draggable key={id} draggableId={'draggable-' + id} index={index}>
        {(provided, snapshot) => (
          <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          >
            <h1>{task.text}</h1>
            <p>{task.priority}</p>

            <p>{task.complete ?
              <button onClick={handleComplete}>Completed</button>
              : <button onClick={handleComplete}>Uncompleted</button>}</p>

            <button onClick={() => handleEdit(task)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </li>
        )}
      </Draggable>
    </div>
  );
};

export default Task;