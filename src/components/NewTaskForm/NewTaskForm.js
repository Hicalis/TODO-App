import { Component } from 'react';
import './NewTaskForm.css'

export default class NewTaskForm extends Component{

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
        if(this.state.label === ''){
            return
        }
        this.props.onItemAdded(this.state.label);
        this.setState({
            label:''
        })
    }

    render(){
        return (
        <form onSubmit={this.onSubmit}>
            <input 
                className="new-todo" 
                placeholder="What needs to be done?" 
                autoFocus
                onChange={this.onLabelChange}
                value={this.state.label}
            />
        </form>);
    }
}


