import React, {useState, useEffect} from 'react';
import PomodoroTimer from '../components/PomodoroTimer';
import Music from '../components/Music';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import {getTasks, updateTask} from '../service/FocusPocusService';

const FocusPocus = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks()
    .then((tasks) => {
      setTasks(tasks)
    })
  }, []);

  const addTask = (task) => {
    const temp = tasks.map(t => t);
    temp.push(task);
    setTasks(temp);
  };

  // const editTask = (updatedTask) => {
  //   updateTask(updatedTask);
  //   const updatedTaskIndex = tasks.findIndex((task) => {
  //     task.id === updateTask.id
  //   });
  //   const updatedTasks = [...tasks];
  //   updatedTasks[updatedTaskIndex] = updatedTask;
  //   setTasks(updatedTasks);
  // };

  const removeTask = (id) => {
    const temp = tasks.map(t => t);
    const indexToDel = temp.map(t => t.id).indexOf(id);
    console.log(indexToDel);
    temp.splice(indexToDel, 1);
    setTasks(temp);
  }


  return (
    <section>
      <div>
        <PomodoroTimer />
      </div>
      <div>
        <Music />
      </div>
      <div>
        <AddTask addTask={addTask}/>
        <TaskList tasks={tasks} removeTask={removeTask}/>
      </div>
    </section>
  );
}

export default FocusPocus;