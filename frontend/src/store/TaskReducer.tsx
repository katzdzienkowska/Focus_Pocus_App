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
};

// get column of tasks by status
const columnOfTasksByStatus = (status: TaskStatus, state: TaskState) => {
    if (status === TaskStatus.TODO) {
        return state.todo;
    } else if (status === TaskStatus.DOING) {
        return state.doing;
    } else if (status === TaskStatus.DONE) {
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

            // handle different statuses possible
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
            const task = byStatus?.find((task) => task.id === id);
            task && byStatus?.splice(state.todo.indexOf(task), 1);
        },

    },
});

export const {addTask, deleteTask} = taskSlice.actions;
export default taskSlice.reducer;