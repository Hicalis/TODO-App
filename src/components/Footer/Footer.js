import './Footer.css'
import TasksFilter from '../TasksFilter/TasksFilter';
import { Component } from 'react';
import PropTypes from 'prop-types';


export default class Footer extends Component {

    static defaultProps = {
        filter: 'All',
        onCompletedTask: () => {},
        onActiveTask:  () => {},
        onAllTask: () => {},
        onClearCompleted: () => {},
        todoCount: 0
    };

    static propTypes = {
        filter: PropTypes.string,
        onCompletedTask: PropTypes.func,
        onActiveTask: PropTypes.func,
        onClearCompleted: PropTypes.func,
        onAllTask: PropTypes.func
    };

    render(){
        const { todoCount, onClearCompleted, onAllTask, onActiveTask, onCompletedTask,filter } = this.props;
        return(
            <footer className='footer'>
                <span className="todo-count">{todoCount} items left</span>
                <TasksFilter 
                    filter = {filter}
                    onAllTask = {()=>{onAllTask()}}
                    onActiveTask = {()=>{onActiveTask()}}
                    onCompletedTask = {()=>{onCompletedTask()}}
                />
                <button className="clear-completed" onClick={ onClearCompleted }>Clear completed</button>
            </footer>
        );
    };
} 