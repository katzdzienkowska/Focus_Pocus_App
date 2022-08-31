import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import '../index.css';

const Task = ({ task, editTask, removeTask, setIsEditing, setCurrentTask, index }) => {


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
      <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
        {(provided, snapshot) => (
          <li
            className={`task ${task.complete && 'task-completed'}`}
            id={task.priority === 'Low' ? 'low-priority' 
            : task.priority === 'High' ? 'high-priority' 
            : 'medium-priority'}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
              boxShadow: snapshot.isDragging ? "0 0 5rem #666" : "none",
              opacity: snapshot.isDragging
                ? "1"
                : provided.draggableProps.style.opacity
            }}
          >
            <p>{task.text}</p>

            <button 
              onClick={handleComplete}>
              {task.complete ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
            </button>
            
            <button 
              onClick={() => handleEdit(task)}>
              <FiEdit />
            </button>
            
            <button 
              onClick={handleDelete}>
              <RiDeleteBin2Line />
            </button>
          </li>
        )}
      </Draggable>
    </div>
  );
};

export default Task;