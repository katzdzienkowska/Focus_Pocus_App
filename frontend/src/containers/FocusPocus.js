import React, {useState, useEffect} from 'react';
import PomodoroTimer from '../components/PomodoroTimer';
import Music from '../components/Music';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import {getTasks, postTask, updateTask, deleteTask} from '../service/FocusPocusService';

const FocusPocus = () => {

  const [tasks, setTasks] = useState([]);

  const createTask = (newTask) => {
    postTask(newTask)
    .then(savedTask => setTasks([...tasks, savedTask]));
  };

  const editTask = (updatedTask) => {
    updateTask(updatedTask)
    const updatedTaskIndex = tasks.findIndex(task => task.id === updatedTask.id);
    const updatedTasks = [...tasks];
    updatedTasks[updatedTaskIndex] = updatedTask;
    setTasks(updatedTasks);
  };

  const removeTask = (taskIdToDelete) => {
    deleteTask(taskIdToDelete);
    setTasks(tasks.filter(task => task.id !== taskIdToDelete));
  };


  useEffect(() => {
    getTasks()
      .then(tasks => setTasks(tasks));
  }, []);

  return (
    <section>
      <div>
        <PomodoroTimer />
      </div>
      <div>
        <Music />
      </div>
      <div>
        <AddTask addTask={createTask}/>
        <TaskList tasks={tasks} editTask={editTask} removeTask={removeTask}/>
      </div>
    </section>
  );
}

export default FocusPocus;