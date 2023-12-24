import Task from "../Task/Task";
import './TaskList.css'

const TaskList = ({ todos, onDeleted, onCompleted }) => {

    

    const elements = todos.map((item)=>{

        const {id} = item;

        if(item.isEditing){
            return (<li className="editing" key={id}><Task name = {item.descriptionName} time = {item.createdTime}/><input type="text" className="edit" value="Editing task"/></li>);
        }

        if(item.isCompleted){
            return(<li className="completed"  key={id}><Task onDeleted={()=>{onDeleted(id)}} onCompleted={()=>{onCompleted(id)}} name = {item.descriptionName} time = {item.createdTime}/></li>)
        }
        else{
            return (<li  key={id}><Task onDeleted={()=>{onDeleted(id)}} onCompleted={()=>{onCompleted(id)}} name = {item.descriptionName} time = {item.createdTime}/></li>);
        }

        
    });

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    );
}

export default TaskList;