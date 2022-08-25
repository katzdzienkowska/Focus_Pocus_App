import { useSelector } from 'react-redux';
import { RootStore } from '../store/Store';
import AddTask from '../components/AddTask';



function Tasks() {

    const {todo, doing, done} = useSelector((store: RootStore) => store.tasks);

    return(
        <section>
            <AddTask />
            // Board to be added here with columns
        </section>
    );
};

export default Tasks;