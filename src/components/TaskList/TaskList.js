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

  // onLabelChange(event) {
  //   this.setState({
  //     id: event.target.id,
  //     label: event.target.value,
  //   })
  // }

  // onSubmit(event) {
  //   event.preventDefault()
  //   console.log(this.state)
  //   if (this.state.label == '') {
  //     return
  //   }
  //   this.props.onEditName(parseInt(this.state.id), this.state.label)
  //   this.setState({
  //     id: 1,
  //     label: '',
  //   })
  // }

  render() {
    const { todos, onDeleted, onCompleted, onEditing, onEditTime, onEditName } = this.props

    const elements = todos.map((item) => {
      const { id, isEditing, descriptionName, createdTime, isPause, minutes, seconds } = item

      // if (isEditing) {
      //   return (
      //     <li className="editing" key={id}>
      //       <Task
      //         name={descriptionName}
      //         time={createdTime}
      //         onEditing={() => {
      //           onEditing(id)
      //         }}
      //         onDeleted={() => {
      //           onDeleted(id)
      //         }}
      //         onCompleted={() => {
      //           onCompleted(id)
      //         }}
      //         minutes={minutes}
      //         seconds={seconds}
      //         isPause={isPause}
      //         onEditTime={onEditTime}
      //         id={id}
      //       />
      //       <form onSubmit={this.onSubmit.bind(this)}>
      //         <input
      //           id={id}
      //           type="text"
      //           className="edit"
      //           onChange={this.onLabelChange.bind(this)}
      //           defaultValue={descriptionName}
      //         />
      //       </form>
      //     </li>
      //   )
      // }

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
              name={descriptionName}
              time={createdTime}
              minutes={minutes}
              seconds={seconds}
              isPause={isPause}
              onEditTime={onEditTime}
              id={id}
            />
          </li>
        )
      }

      return (
        <li key={id}>
          <Task
            onEditName={onEditName}
            onEditing={() => {
              onEditing(id)
            }}
            onDeleted={() => {
              onDeleted(id)
            }}
            onCompleted={() => {
              onCompleted(id)
            }}
            name={descriptionName}
            time={createdTime}
            minutes={minutes}
            seconds={seconds}
            isPause={isPause}
            onEditTime={onEditTime}
            id={id}
            isEditing={isEditing}
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
