import React from 'react';
import { updateTask } from '../service/FocusPocusService';
import Task from './Task';

const TaskList = ({tasks, removeTask}) => {

  const taskNodes = tasks.map((task) => {
    return <Task key={task.id} task={task} removeTask={removeTask}/>
  });

  return (
    <div>
      <h2>My tasks:</h2>
      {taskNodes}
    </div>
  );
};

export default TaskList;