import React, {useEffect} from 'react';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';

function Tasks() {

    return(
        <section>
            <TaskList />
            <AddTask />
        </section>
    );
};

export default Tasks;