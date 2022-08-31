import React from 'react';
import Task from './Task';
import { Droppable } from "react-beautiful-dnd";
import '../index.css';

const TaskList = ({ removeTask, editTask, filter, setFilter, filteredTasks, setIsEditing, setCurrentTask }) => {

  const filterTasks = (filterValue) => {
    setFilter(filterValue)
  };


  return (
    <div>

      <div className='filter'>
        <button 
        className={filter === "All" ? "active" : ""} 
        onClick={() => filterTasks('All')}>
          All
        </button>
        <button 
        className={filter === "Active" ? "active" : ""} 
        onClick={() => filterTasks('Active')}>
          Active
        </button>
        <button 
        className={filter === "Completed" ? "active" : ""} 
        onClick={() => filterTasks('Completed')}>
          Completed
        </button>
      </div>
      
      <Droppable droppableId='task'>
        {(provided) => (
        <ul className='task-wrapper' 
            ref={provided.innerRef} 
            {...provided.droppableProps}
            >
            {filteredTasks.map((task, index) => (
              <Task
              key={task.id}
              task={task}
              editTask={editTask}
              removeTask={removeTask}
              setIsEditing={setIsEditing}
              setCurrentTask={setCurrentTask}
              index={index}
              {...task} />
            ))}
          {provided.placeholder}
        </ul>
      )}
      </Droppable>
      
      <div className='empty-list'>
      <span>You have </span>
        {filteredTasks.filter((task) => task.complete === false).length}
        <span> tasks left to do</span>
      </div>
    
    </div>
  );
};

export default TaskList;