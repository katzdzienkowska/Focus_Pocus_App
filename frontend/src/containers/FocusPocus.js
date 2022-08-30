import React, { useState, useEffect } from 'react';
import PomodoroTimer from '../components/PomodoroTimer';
import Music from '../components/Music';
import AddTask from '../components/Form';
import TaskList from '../components/TaskList';
import { getTasks, postTask, updateTask, deleteTask } from '../service/FocusPocusService';
import { DragDropContext } from "react-beautiful-dnd";
import '../index.css';

const FocusPocus = () => {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const createTask = (newTask) => {
    postTask(newTask)
      .then(savedTask => setTasks([...tasks, savedTask]));
  };

  const editTask = (updatedTask) => {
    console.log(updatedTask)
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
  }, [tasks, filter]);


  const handleDragEnd = (result) => {
    const source = result.source.index;
    const destination = result.destination?.index;
    if (destination) {
      const reordered = [...filteredTasks];
      reordered.splice(destination, 0, reordered.splice(source, 1)[0]);
      setFilteredTasks(reordered);
    };
  };


  return (
    <section className='main-container'>
      <div className='sub-container'>
        <div className='pomodoro-module'>
          <PomodoroTimer />
        </div>
        <div className='music-module'>
          <Music />
        </div>
      </div>
      <div className='task-module'>

        <AddTask
          addTask={createTask}
          editTask={editTask}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          currentTask={currentTask}
          setCurrentTask={setCurrentTask} />

        <DragDropContext onDragEnd={handleDragEnd}>
          {tasks.length ?
            <TaskList
              editTask={editTask}
              removeTask={removeTask}
              filter={filter}
              setFilter={setFilter}
              filteredTasks={filteredTasks}
              setIsEditing={setIsEditing}
              setCurrentTask={setCurrentTask} />
            : <p className='empty-list'>The list is empty!</p>}
        </DragDropContext>
      </div>
    </section>
  );
};

export default FocusPocus;