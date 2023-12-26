import { Component } from "react";
import Task from "../Task/Task";
import './TaskList.css'

export default class TaskList extends Component{

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onEditName(this.state.label)
    }
    
    render(){
        const { todos, onDeleted, onCompleted, onEditing } = this.props;

        const elements = todos.map((item)=>{

        const {id} = item;

            if(item.isEditing){
                return (
                    <li 
                        className="editing" 
                        key={id}>
                            <form onSubmit={this.onSubmit}> 
                                <Task 
                                    name = {item.descriptionName} 
                                    time = {item.createdTime}/>
                                <input 
                                    type="text" 
                                    className="edit" 
                                    value={this.state.label}
                                    onChange={this.onLabelChange}/>
                            </form>

                    </li>
                );
            }

            if(item.isCompleted){
                return(
                    <li className="completed"  key={id}>
                        <Task 
                            onEditing = {()=>{onEditing(id)}}
                            onDeleted={()=>{onDeleted(id)}} 
                            onCompleted={()=>{onCompleted(id)}} 
                            name = {item.descriptionName} 
                            time = {item.createdTime}/>
                    </li>)
            }
            else{
                return (
                    <li  key={id}>
                        <Task 
                            onEditing = {()=>{onEditing(id)}}
                            onDeleted={()=>{onDeleted(id)}} 
                            onCompleted={()=>{onCompleted(id)}} 
                            name = {item.descriptionName} 
                            time = {item.createdTime}/>
                    </li>);
            }

            
        });

        return (
            <ul className="todo-list">
                {elements}
            </ul>
        );
    };
}
