import React, { useState } from 'react';
import AddTask from './AddTask';
import EditTask from './EditTask';
import '../index.css';

const Form = ({ addTask, editTask, isEditing, setIsEditing, currentTask, setCurrentTask }) => {

  const [text, setText] = useState('');
  const [priority, setPriority] = useState('None');


  return (
    <section className='form-general'>

      <h1 className='module-header'>To-Do List</h1>

      {isEditing ? (
        <EditTask
          editTask={editTask}
          setIsEditing={setIsEditing}
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
          text={text} setText={setText}
          priority={currentTask.priority}
          setPriority={setPriority} />
      ) : (
        <AddTask
          addTask={addTask}
          text={text}
          setText={setText}
          priority={priority}
          setPriority={setPriority} />
      )}
    </section>
  );
};

export default Form;