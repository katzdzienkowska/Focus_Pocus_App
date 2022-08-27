import React from 'react';
import Task from './Task';

const TaskList = ({tasks, removeTask}) => {

  const taskNodes = tasks.map((task) => {
    return <Task key={task.id} task={task} removeTask={removeTask}/>
  });

  return (
    <div>
      {taskNodes}
    </div>
  );
};

export default TaskList;