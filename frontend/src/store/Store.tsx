import {configureStore} from '@reduxjs/toolkit';
import TaskReducer from './TaskReducer';

const store = configureStore({
    reducer: {
        tasks: TaskReducer,
    },
});

store.subscribe(() => {
    const {todo, doing, done} = store.getState().tasks;
    localStorage.setItem(
        'tasks',
        JSON.stringify({
            todo,
            doing,
            done,
        })
    );
});

export type RootStore = ReturnType<typeof store.getState>;


export default store;