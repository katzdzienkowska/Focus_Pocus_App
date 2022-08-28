import React from 'react';
import Task from './Task';

const TaskList = ({tasks, removeTask, editTask}) => {

  const taskNodes = tasks.map((task) => {
    return <Task key={task.id} task={task} editTask={editTask} removeTask={removeTask}/>
  });

  return (
    <div>
      <h2>My tasks:</h2>
      {taskNodes}
    </div>
  );
};

export default TaskList;