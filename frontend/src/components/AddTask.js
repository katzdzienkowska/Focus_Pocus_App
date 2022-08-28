import React, {useState} from 'react';

const AddTask = ({addTask}) => {

  const [text, setText] = useState('');
  const [priority, setPriority] = useState('None');

  const handleTextChange = (e) => setText(e.target.value);
  const handlePriorityChange = (e) => setPriority(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      text: text,
      priority: priority,
      complete: false
    })
    setText('');
    setPriority('None');
  }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   postTask(newTask)
  //   .then((data) => {
  //     AddTask(data);
  //   })
  //   setNewTask({
  //     text: '',
  //     priority: '',
  //   });
  // };

  // const onChange = (e) => {
  //   const newTaskData = {...newTask}
  //   newTaskData[e.target.name] = e.target.value;
  //   setNewTask(newTaskData);
  // };

  return (
    <form onSubmit={handleSubmit}>

      <h1>Add a new task:</h1>

      <label htmlFor='text'>Add text:</label>
      <input type='text' id='text' name='text' placeholder='Add text here' value={text} required autoFocus autoComplete='off' onChange={handleTextChange} />

      <h3>Priority:</h3>
      <label htmlFor='none'>None</label>
      <input type='radio' name='priority' id='none' checked={priority === 'None'} value='None' onChange={handlePriorityChange}></input>
      <label htmlFor='low'>Low</label>
      <input type='radio' name='priority' id='low' checked={priority === 'Low'} value='Low' onChange={handlePriorityChange}></input>
      <label htmlFor='medium'>Medium</label>
      <input type='radio' name='priority' id='medium' checked={priority === 'Medium'} value='Medium' onChange={handlePriorityChange}></input>
      <label htmlFor='high'>High</label>
      <input type='radio' name='priority' id='high' checked={priority === 'High'} value='High' onChange={handlePriorityChange}></input>

      <input type='submit' name='submit' value='Add task'/>

    </form>
  );
}

export default AddTask;