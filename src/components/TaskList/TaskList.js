import { Component } from 'react'
import PropTypes from 'prop-types'

import Task from '../Task/Task'

import './TaskList.css'

export default class TaskList extends Component {
  constructor() {
    super()
    this.state = {
      id: 1,
      label: '',
    }
  }

  onLabelChange(event) {
    this.setState({
      id: event.target.id,
      label: event.target.value,
    })
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onEditName(parseInt(this.state.id), this.state.label)
    this.setState({
      id: 1,
      label: '',
    })
  }

  render() {
    const { todos, onDeleted, onCompleted, onEditing } = this.props

    const elements = todos.map((item) => {
      const { id } = item

      if (item.isEditing) {
        return (
          <li className="editing" key={id}>
            <form onSubmit={this.onSubmit.bind(this)}>
              <Task name={item.descriptionName} time={item.createdTime} />
              <input id={id} type="text" className="edit" onChange={this.onLabelChange.bind(this)} />
            </form>
          </li>
        )
      }

      if (item.isCompleted) {
        return (
          <li className="completed" key={id}>
            <Task
              onEditing={() => {
                onEditing(id)
              }}
              onDeleted={() => {
                onDeleted(id)
              }}
              onCompleted={() => {
                onCompleted(id)
              }}
              name={item.descriptionName}
              time={item.createdTime}
            />
          </li>
        )
      }

      return (
        <li key={id}>
          <Task
            onEditing={() => {
              onEditing(id)
            }}
            onDeleted={() => {
              onDeleted(id)
            }}
            onCompleted={() => {
              onCompleted(id)
            }}
            name={item.descriptionName}
            time={item.createdTime}
          />
        </li>
      )
    })

    return <ul className="todo-list">{elements}</ul>
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onDeleted: PropTypes.func,
  onCompleted: PropTypes.func,
  onEditing: PropTypes.func,
}

TaskList.defaultProps = {
  todos: [{}],
  onDeleted: () => {},
  onCompleted: () => {},
  onEditing: () => {},
}
