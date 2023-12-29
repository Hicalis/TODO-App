import ReactDOM from 'react-dom/client'
import './index.css'
import { Component } from 'react'

import NewTaskForm from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'
import Footer from './components/Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      taskData: [],
      filter: 'All',
    }
    this.maxId = 100
  }

  deleteItem(id) {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => el.id === id)
      const newData = [...taskData.slice(0, idx), ...taskData.slice(idx + 1)]
      return {
        taskData: newData,
      }
    })
  }

  completeTask(id) {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => el.id === id)
      const oldItem = taskData[idx]
      const newItem = { ...oldItem, isCompleted: !oldItem.isCompleted }
      const newData = [...taskData.slice(0, idx), newItem, ...taskData.slice(idx + 1)]

      return {
        taskData: newData,
      }
    })
  }

  clearCompleted() {
    this.setState(({ taskData }) => {
      const newData = taskData.filter((element) => !element.isCompleted)
      return {
        taskData: newData,
      }
    })
  }

  editTask(id) {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => el.id === id)
      const oldItem = taskData[idx]
      const newItem = { ...oldItem, isEditing: !oldItem.isEditing }
      const newData = [...taskData.slice(0, idx), newItem, ...taskData.slice(idx + 1)]
      return {
        taskData: newData,
      }
    })
  }

  addItem(text) {
    const newItem = this.createTodoItem(text)
    this.setState(({ taskData }) => {
      const newData = [...taskData, newItem]
      return {
        taskData: newData,
      }
    })
  }

  nameEdit(id, label) {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => el.id === id)
      const oldItem = taskData[idx]
      const newItem = { ...oldItem, isEditing: false, descriptionName: label }
      const newData = [...taskData.slice(0, idx), newItem, ...taskData.slice(idx + 1)]
      return {
        taskData: newData,
      }
    })
  }

  createTodoItem(descriptionName) {
    const date = new Date()
    return {
      id: this.maxId++,
      createdTime: date,
      descriptionName,
      isEditing: false,
      isCompleted: false,
    }
  }

  showCompletedTask() {
    this.setState(() => ({
      filter: 'Completed',
    }))
  }

  showAllTask() {
    this.setState(() => ({
      filter: 'All',
    }))
  }

  showActiveTask() {
    this.setState(() => ({
      filter: 'Active',
    }))
  }

  filterItem() {
    const { taskData, filter } = this.state
    if (filter === 'All') {
      return taskData
    }
    if (filter === 'Active') {
      return taskData.filter((item) => !item.isCompleted)
    }
    if (filter === 'Completed') {
      return taskData.filter((item) => item.isCompleted)
    }
  }

  render() {
    const doneCount = this.state.taskData.filter((el) => el.isCompleted).length

    const todoCount = this.state.taskData.length - doneCount

    return (
      <section className="todoapp">
        <header>
          <h1>todos</h1>
          <NewTaskForm onItemAdded={this.addItem.bind(this)} />
        </header>
        <section className="main">
          <TaskList
            todos={this.filterItem()}
            onDeleted={this.deleteItem.bind(this)}
            onCompleted={this.completeTask.bind(this)}
            onEditing={this.editTask.bind(this)}
            onEditName={this.nameEdit.bind(this)}
          />
          <Footer
            filter={this.state.filter}
            todoCount={todoCount}
            onClearCompleted={this.clearCompleted.bind(this)}
            onActiveTask={this.showActiveTask.bind(this)}
            onCompletedTask={this.showCompletedTask.bind(this)}
            onAllTask={this.showAllTask.bind(this)}
          />
        </section>
      </section>
    )
  }
}
root.render(<App />)
