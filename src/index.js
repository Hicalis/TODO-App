import ReactDOM from 'react-dom/client';
import './index.css';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default class App extends Component {

  maxId = 100;

  state={
    taskData : [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Completed task'),
      this.createTodoItem('Active task')
    ],
    filter: 'All'
  }

  deleteItem = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el)=> el.id === id);
      const newData = [...taskData.slice(0, idx),...taskData.slice(idx+1)];
      return {
        taskData: newData,
      };
    })
  }

  completeTask = (id) => {
    this.setState(({ taskData }) => {
        const idx = taskData.findIndex((el)=> el.id === id);
        const oldItem = taskData[idx];
        const newItem = {...oldItem, isCompleted: !oldItem.isCompleted};
        const newData = [...taskData.slice(0, idx),newItem,...taskData.slice(idx+1)];

        return{
          taskData: newData,
        }
    })
  }

  clearCompleted = () => {
    this.setState(({taskData}) => {
       const newData = taskData.filter(element => !element.isCompleted);
       return{
        taskData:newData
      }
      });

    }
  

  editTask = (id) => {
    this.setState(({ taskData }) => {
        const idx = taskData.findIndex((el)=> el.id === id);
        const oldItem = taskData[idx];
        const newItem = {...oldItem, isEditing: !oldItem.isEditing};
        const newData = [...taskData.slice(0, idx),newItem,...taskData.slice(idx+1)];
        return{
          taskData:newData
        }
    })
  }

  // editNameTask = (id, text) => {
  //   this.setState(({ taskData }) => {
  //     const idx = taskData.findIndex((el)=> el.id === id);
  //     const oldItem = taskData[idx];
  //     const newItem = {...oldItem, descriptionName: text};
  //     const newData = [...taskData.slice(0, idx),newItem,...taskData.slice(idx+1)];
  //     return{
  //       taskData:newData
  //     }
  //   });
  // }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ taskData })=>{
      const newData = [...taskData, newItem];
      return {
        taskData: newData,
      }
    });
  };

  nameEdit = (id, text) => {
    this.setState(({ taskData })=>{
      const idx = taskData.findIndex((el)=> el.id === id);
      const oldItem = taskData[idx];
      const newItem = {...oldItem, descriptionName: text, isEditing: false};
      const newData = [...taskData.slice(0, idx),newItem,...taskData.slice(idx+1)];
      return{
        taskData:newData
      }
    })
  }

  createTodoItem(descriptionName){
    const date = new Date();
    return{
      id : this.maxId++, 
      createdTime: formatDistanceToNow(date), 
      descriptionName,
      isEditing: false, 
      isCompleted: false
    }
  }

  showCompletedTask = () => {
    this.setState(()=>{
      return {
        filter: 'Completed'
      }
    });
  }

  showAllTask = () => {
    this.setState(()=>{
      return {
        filter: 'All'
      }
    });
  }

  showActiveTask = () => {
    this.setState(()=>{
      return {
        filter: 'Active'
      }
    });
  }

  filetrItem = () => {
    const { taskData, filter } = this.state;
    if(filter === 'All'){
      return taskData
    }
    else if(filter === 'Active'){
      return taskData.filter(item => !item.isCompleted)
    }
    else if(filter === 'Completed'){  
      return taskData.filter(item => item.isCompleted)
    }
  }

  

  render(){
    const doneCount = this.state.taskData.filter((el)=>el.isCompleted).length;

    const todoCount = this.state.taskData.length - doneCount;

    return (
        <section className='todoapp'>
          <header>
            <h1>todos</h1>
            <NewTaskForm onItemAdded={this.addItem}/>
          </header>
          <section className='main'>
            <TaskList 
              todos={ this.filetrItem() }
              onDeleted={this.deleteItem}
              onCompleted ={this.completeTask}
              onEditing = {this.editTask}
              onEditName={this.nameEdit}
            />
            <Footer
              filter = {this.state.filter} 
              todoCount= { todoCount }
              onClearCompleted = {this.clearCompleted}
              onActiveTask = { this.showActiveTask }
              onCompletedTask = { this.showCompletedTask }
              onAllTask = {this.showAllTask}
            />
          </section>
        </section>
      )
  }
}
root.render(
  <App/>
);


