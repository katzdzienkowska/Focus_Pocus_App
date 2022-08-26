import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskStatus, TaskState} from '../types/Tasks';

// to fetch any existing tasks prior to adding new ones
const starterTasks = () => {
    try {
        const starterState = localStorage.getItem('tasks');
        if (starterState) {
            return JSON.parse(starterState) as TaskState;
        }
    } catch (error) {
        console.log(error);
    }
};

// declare initial state
const initialState: TaskState = starterTasks() || {
    todo: [],
    doing: [],
    done: [],
    edit: null,
};

// get column of tasks by status
// For TS it's better to use switch statement!!
const columnOfTasksByStatus = (status: TaskStatus, state: TaskState) => {
    switch(status) {
        case TaskStatus.TODO:
            return state.todo;
        case TaskStatus.DOING:
            return state.doing;
        case TaskStatus.DONE:
            return state.done;    
    }
};

// create task slice
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

        // add task
        addTask: (state: TaskState, action: PayloadAction<Task>) => {
            const {status} = action.payload;
            const task = action.payload;

            // handle possible statuses
            if (status === TaskStatus.TODO) {
                state.todo.push(task);
            } else if (status === TaskStatus.DOING) {
                state.doing.push(task);
            } else if (status === TaskStatus.DONE) {
                state.done.push(task);
            }
        },

        // delete task by id
        deleteTask: (state: TaskState, {payload: {id, status}} : PayloadAction<Task>) => {
            const byStatus = columnOfTasksByStatus(status, state);
            const task = byStatus.find((task) => task.id === id);
            task && byStatus.splice(state.todo.indexOf(task), 1);
        },

        // edit task by id
        editTask: (state: TaskState, {payload: {task, previousStatus}} : PayloadAction<{task: Task; previousStatus: TaskStatus}>) => {
            const byStatus = columnOfTasksByStatus(previousStatus, state);
            const index = byStatus.findIndex((task) => task.id === task.id);

            if (index > -1) {
                if (task.status !== previousStatus) {
                    const newStatus = columnOfTasksByStatus(task.status, state);
                    byStatus.splice(index, 1);
                    newStatus.push(task);
                } else {
                    byStatus[index] = task;
                }
            }
            state.edit = null;
        },

        // want or don't want to edit
        setEdit: (state: TaskState, action: PayloadAction<Task>) => {
            state.edit = action.payload;
        },

        unsetEdit: (state: TaskState) => {
            state.edit = null;
        },

    },
});

export const {addTask, deleteTask, editTask, setEdit, unsetEdit} = taskSlice.actions;
export default taskSlice.reducer;