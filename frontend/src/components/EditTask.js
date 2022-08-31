import React from 'react';
import '../index.css';

const EditTask = ({ editTask, setIsEditing, currentTask, setCurrentTask, text, setText, priority, setPriority }) => {


  const handleEditTextChange = (e) => {
    setCurrentTask({ ...currentTask, text: e.target.value });
  };

  const handleEditPriorityChange = (e) => {
    setCurrentTask({ ...currentTask, priority: e.target.value });
    // console.log(e.target.value)
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTask(currentTask)
    setIsEditing(false)
    setText('');
    setPriority('Medium');
  };


  return (
    <form className='form' onSubmit={handleEditSubmit}>
      
      <label id='edit-label' htmlFor='editTask'>Edit text:</label>
      <input type='text' id='text' placeholder='Edit task here' value={currentTask.text} autoComplete='off' onChange={handleEditTextChange}></input>
     
      <div className='select-priority'>
        <p>Priority:</p>
        <div className='priorities'>
          <label htmlFor='low'>Low</label>
          <input type='radio' name='priority' id='low' checked={priority === 'Low'} value='Low' onChange={handleEditPriorityChange}></input>
          <label htmlFor='medium'>Medium</label>
          <input type='radio' name='priority' id='medium' checked={priority === 'Medium'} value='Medium' onChange={handleEditPriorityChange}></input>
          <label htmlFor='high'>High</label>
          <input type='radio' name='priority' id='high' checked={priority === 'High'} value='High' onChange={handleEditPriorityChange}></input>
        </div>
      </div>
     
      <div className='edit-buttons'>
      <button type='submit'>Update</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>

    </form>
  );
};

export default EditTask;