import { Component } from 'react';
import './TasksFilter.css'

export default class TasksFilter extends Component{

    selectButton = (event) => {
        event.currentTarget.classList.toggle('selected');
    }

    state = {
        className: 'selected'
    };

    render(){
        
        const {onAllTask, onActiveTask, onCompletedTask, filter} = this.props;

        return(
            <ul className='filters'>
                <li>
                    <button className={filter === 'All' ? 'selected' : null} onClick={ onAllTask }>All</button>
                </li>
                <li>
                    <button className={filter === 'Active' ? 'selected' : null} onClick = { onActiveTask } >Active</button>
                </li>
                <li>
                    <button className={filter === 'Completed' ? 'selected' : null} onClick={ onCompletedTask }>Completed</button>
                </li>
            </ul>
        );
    }
}
