import React from 'react';
import Task from './Task';
import { Droppable } from "react-beautiful-dnd";

const TaskList = ({ removeTask, editTask, setFilter, filteredTasks, setIsEditing, setCurrentTask }) => {

  // const taskNodes = filteredTasks.map((task) => {
  //   return <Task
  //     key={task.id}
  //     task={task}
  //     editTask={editTask}
  //     removeTask={removeTask}
  //     setIsEditing={setIsEditing}
  //     setCurrentTask={setCurrentTask} />
  // });

  const filterTasks = (filterValue) => {
    setFilter(filterValue)
  };


  return (
    <div>
      <div>
        <button onClick={() => filterTasks('All')}>Show all tasks</button>
        <button onClick={() => filterTasks('Active')}>Show active tasks</button>
        <button onClick={() => filterTasks('Completed')}>Show completed tasks</button>
      </div>
      <h2>My tasks:</h2>
      <Droppable droppableId='droppable-1'>
        {(provided) => (
        <ul ref={provided.innerRef} {...provided.droppableProps}>
          {filteredTasks.map((task, i) => (
            <Task
            key={task.id}
            task={task}
            editTask={editTask}
            removeTask={removeTask}
            setIsEditing={setIsEditing}
            setCurrentTask={setCurrentTask}
            index={i}
            {...task} />
          ))}
          {provided.placeholder}
        </ul>
      )}
      </Droppable>
      <div>
        {filteredTasks.filter((task) => task.complete === false).length}
        <span> tasks left</span>
      </div>
    </div>
  );
};

export default TaskList;