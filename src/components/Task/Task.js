import { Component } from "react";


export default class Task extends Component{
    render(){
        
        

        const { name,time,onDeleted,onCompleted } = this.props;

        return (
            <div className="view">
                <input className="toggle" type="checkbox" onClick={ onCompleted }/>
                <label>
                    <span className="description">{ name }</span>
                    <span className="created">{ time }</span>
                </label>
                <button className="icon icon-edit"/>
                <button className="icon icon-destroy" onClick={onDeleted}/>
            </div>
        );
    }
}
