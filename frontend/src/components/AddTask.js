import React, {useState} from 'react';
import {postTask} from '../service/FocusPocusService';

const AddTask = ({AddTask}) => {

  const [newTask, setNewTask] = useState({
    text: '',
    priority: '#ffffff',
    complete: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    postTask(newTask)
    .then((data) => {
      AddTask(data);
    })
    setNewTask({
      text: '',
      priority: '',
    });
  };

  const onChange = (e) => {
    const newTaskData = {...newTask}
    newTaskData[e.target.name] = e.target.value;
    setNewTask(newTaskData);
  };

  return (
    <form onSubmit={onSubmit}>

      <label htmlFor='text'>Add text:</label>
      <input onChange={onChange} type='text' id='text' name='text' placeholder='Add text here' value={newTask.text} required autoFocus/>
      <input type='submit' value='Add task'/>
    </form>
  );
}

export default AddTask;