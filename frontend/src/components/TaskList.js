import React from 'react';
import Task from './Task';

const TaskList = ({removeTask, editTask, setFilter, filteredTasks}) => {

  const taskNodes = filteredTasks.map((task) => {
    return <Task key={task.id} task={task} editTask={editTask} removeTask={removeTask}/>
  });

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
      <div>
        {taskNodes}
      </div>
      <div>
          {filteredTasks.filter((task) => task.complete === false).length} 
          <span> items left</span>
        </div>
    </div>
  );
};

export default TaskList;