import React, { useState } from 'react';
import AddForm from './AddForm';
import EditForm from './EditForm';

const AddTask = ({ addTask, editTask, isEditing, setIsEditing, currentTask, setCurrentTask }) => {

  const [text, setText] = useState('');
  const [priority, setPriority] = useState('None');


  return (
    <div>
      {isEditing ? (
        <EditForm
          editTask={editTask}
          setIsEditing={setIsEditing}
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
          text={text} setText={setText}
          priority={currentTask.priority}
          setPriority={setPriority} />
      ) : (
        <AddForm
          addTask={addTask}
          text={text}
          setText={setText}
          priority={priority}
          setPriority={setPriority} />
      )}
    </div>
  );
};

export default AddTask;