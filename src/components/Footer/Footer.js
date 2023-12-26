import './Footer.css'
import TasksFilter from '../TasksFilter/TasksFilter';
import { Component } from 'react';

export default class Footer extends Component {

   

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