import Task from "../Task/Task";
import './TaskList.css'

const TaskList = ({ todos }) => {

    const elements = todos.map((item)=>{
        if(item.status === 'completed'){
            return(<li className={item.status}><Task name = {item.descriptionName} time = {item.createdTime}/></li>)
        }
        else if(item.status === 'editing'){
            return (<li className={item.status}><Task name = {item.descriptionName} time = {item.createdTime}/><input type="text" class="edit" value="Editing task"/></li>);
        }
        else{
            return (<li><Task name = {item.descriptionName} time = {item.createdTime}/></li>);
        }
    });

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    );
}

export default TaskList;