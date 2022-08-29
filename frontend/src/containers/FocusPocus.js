import React, {useState, useEffect} from 'react';
import PomodoroTimer from '../components/PomodoroTimer';
import Music from '../components/Music';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import {getTasks, postTask, updateTask, deleteTask} from '../service/FocusPocusService';

const FocusPocus = () => {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [filteredTasks, setFilteredTasks] = useState([]);

  const createTask = (newTask) => {
    postTask(newTask)
    .then(savedTask => setTasks([...tasks, savedTask]));
  };

  const editTask = (updatedTask) => {
    updateTask(updatedTask)
    .then(() => {
      const updatedTaskIndex = tasks.findIndex(task => task.id === updatedTask.id);
      const updatedTasks = [...tasks];
      updatedTasks[updatedTaskIndex] = updatedTask;
      setTasks(updatedTasks);
    });
  };

  const removeTask = (taskIdToDelete) => {
    deleteTask(taskIdToDelete)
    .then(() => {
      setTasks(tasks.filter(task => task.id !== taskIdToDelete));
    });
  };

  const filterTasks = () => {
    switch (filter) {
      case 'Completed':
        setFilteredTasks(tasks.filter((task) => task.complete === true))
        break;
      case 'Active':
        setFilteredTasks(tasks.filter((task) => task.complete === false))
        break;
      default:
        setFilteredTasks(tasks)
        break;
    }
  };

  useEffect(() => {
    getTasks()
    .then(tasks => setTasks(tasks));
  }, []);

  useEffect(() => {
    filterTasks()
    // eslint-disable-next-line
  }, [tasks, filter])

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
        {tasks.length ? <TaskList editTask={editTask} removeTask={removeTask} setFilter={setFilter} filteredTasks={filteredTasks}/> : <p>The list is empty!</p>}
      </div>
    </section>
  );
}

export default FocusPocus;