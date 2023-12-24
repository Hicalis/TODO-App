import ReactDOM from 'react-dom/client';
import './index.css';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import { Component } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default class App extends Component {

  state={
    taskData : [
      {id : 1, createdTime:'created 17 seconds ago', descriptionName: 'Completed task', isEditing: false, isCompleted: true},
      {id : 2, createdTime:'created 17 seconds ago', descriptionName: 'Completed task', isEditing: true, isCompleted: false},
      {id : 3, createdTime:'created 5 minutes ago', descriptionName: 'Active task', isEditing: false, isCompleted: false}
    ]
  }

  deleteItem = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el)=> el.id === id);
      const newData = [...taskData.slice(0, idx),...taskData.slice(idx+1)];
      return {
        taskData: newData
      };
    })
  }

  completeTask = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el)=> el.id === id);
      const newData = [...taskData.slice(0)];
      newData.forEach((item) => {
        if(item.id === idx+1){
          if(item.isCompleted){
            item.isCompleted = false;
          }
          else{
            item.isCompleted = true;
          }
        }
      });
      return {
        taskData: newData
      };
    })
  }


  render(){
    return (
        <section className='todoapp'>
          <header>
            <h1>todos</h1>
            <NewTaskForm />
          </header>
          <section className='main'>
            <TaskList 
            todos={this.state.taskData}
            onDeleted={this.deleteItem}
            onCompleted ={this.completeTask}/>
            <Footer/>
          </section>
        </section>
      )
  }
}
root.render(
  <App/>
);


