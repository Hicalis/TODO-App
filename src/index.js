import ReactDOM from 'react-dom/client';
import './index.css';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {

const taskData = [
  {createdTime:'created 17 seconds ago', status: 'completed', descriptionName: 'Completed task'},
  {createdTime:'created 17 seconds ago', status: 'editing', descriptionName: 'Completed task'},
  {createdTime:'created 5 minutes ago', descriptionName: 'Active task'}

];
  return (
    <section className='todoapp'>
      <header>
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className='main'>
        <TaskList todos={taskData}/>
        <Footer/>
      </section>
    </section>
  );
}
root.render(
  <App/>
);


