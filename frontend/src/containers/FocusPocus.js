import React, {useState, useEffect} from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import {getTasks} from '../service/FocusPocusService';

const FocusPocus = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks()
    .then((tasks) => {
      setTasks(tasks)
    })
  }, [tasks]);

  const addTask = (task) => {
    const temp = tasks.map(t => t);
    temp.push(task);
    setTasks(temp);
  };

  const removeTask = (id) => {
    const temp = tasks.map(t => t);
    const indexToDel = temp.map(t => t.id).indexOf(id);
    console.log(indexToDel);
    temp.splice(indexToDel, 1);
    setTasks(temp);
  }


  return (
    <section>
      <AddTask addTask={addTask}/>
      <TaskList tasks={tasks} removeTask={removeTask}/>
    </section>
  );
}

export default FocusPocus;