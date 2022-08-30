import React from 'react';
import '../index.css';

const AddTask = ({ addTask, text, setText, priority, setPriority }) => {

  const handleTextChange = (e) => setText(e.target.value);
  const handlePriorityChange = (e) => setPriority(e.target.value);


  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      text,
      priority,
      complete: false
    })
    setText('');
    setPriority('None');
  };


  return (
    <form className='form' onSubmit={handleSubmit}>

      <label id='task-label' htmlFor='addTask'>What to do?</label>
      <input type='text' id='text' name='addTask' placeholder='Add text here' value={text} required autoFocus autoComplete='off' onChange={handleTextChange} />
      
      <div className='select-priority'>
        <p>Select priority:</p>
        <div className='priorities'>
          <label htmlFor='none'>None</label>
          <input type='radio' name='priority' id='none' checked={priority === 'None'} value='None' onChange={handlePriorityChange}></input>
          <label htmlFor='low'>Low</label>
          <input type='radio' name='priority' id='low' checked={priority === 'Low'} value='Low' onChange={handlePriorityChange}></input>
          <label htmlFor='medium'>Medium</label>
          <input type='radio' name='priority' id='medium' checked={priority === 'Medium'} value='Medium' onChange={handlePriorityChange}></input>
          <label htmlFor='high'>High</label>
          <input type='radio' name='priority' id='high' checked={priority === 'High'} value='High' onChange={handlePriorityChange}></input>
        </div>
      </div>
      
      <button type='submit'>Add task</button>
    
    </form>
  );
};

export default AddTask;