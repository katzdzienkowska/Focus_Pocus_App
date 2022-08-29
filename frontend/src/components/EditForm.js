import React from 'react';

const EditForm = ({ editTask, setIsEditing, currentTask, setCurrentTask, text, setText, priority, setPriority }) => {


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
    setPriority('None');
  };


  return (
    <form onSubmit={handleEditSubmit}>
      <h2>Edit task:</h2>
      <label htmlFor='editTask'>Edit text:</label>
      <input type='text' id='text' placeholder='Edit task here' value={currentTask.text} autoComplete='off' onChange={handleEditTextChange}></input>
      <h3>Priority:</h3>
      <label htmlFor='none'>None</label>
      <input type='radio' name='priority' id='none' checked={priority === 'None'} value='None' onChange={handleEditPriorityChange}></input>
      <label htmlFor='low'>Low</label>
      <input type='radio' name='priority' id='low' checked={priority === 'Low'} value='Low' onChange={handleEditPriorityChange}></input>
      <label htmlFor='medium'>Medium</label>
      <input type='radio' name='priority' id='medium' checked={priority === 'Medium'} value='Medium' onChange={handleEditPriorityChange}></input>
      <label htmlFor='high'>High</label>
      <input type='radio' name='priority' id='high' checked={priority === 'High'} value='High' onChange={handleEditPriorityChange}></input>

      <button type='submit'>Update</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>

    </form>
  );
};

export default EditForm;