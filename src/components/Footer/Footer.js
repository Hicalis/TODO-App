import './Footer.css'
import TasksFilter from '../TasksFilter/TasksFilter';

const Footer = () => {
    return(
        <footer className='footer'>
            <span class="todo-count">1 items left</span>
            <TasksFilter />
            <button class="clear-completed">Clear completed</button>
        </footer>
    );
};

export default Footer;