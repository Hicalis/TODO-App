import { Component } from "react";
import { formatDistanceToNow } from 'date-fns';


export default class Task extends Component{
    render(){
        
        const { name, time, onDeleted, onCompleted, onEditing } = this.props;

        return (
            <div className="view">
                <input className="toggle" type="checkbox" onClick={ onCompleted }/>
                <label>
                    <span className="description">{ name }</span>
                    <span className="created">{ time }</span>
                </label>
                <button className="icon icon-edit" onClick={ onEditing }/>
                <button className="icon icon-destroy" onClick={ onDeleted }/>
            </div>
        );
    }
}
