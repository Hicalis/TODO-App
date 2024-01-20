// import { useState } from 'react'

import Task from '../Task/Task'

import './TaskList.css'

const TaskList = (props) => {
  const { todos, onDeleted, onCompleted, onEditing, onEditTime, onEditName } = props

  const elements = todos.map((item) => {
    const { id, isEditing, descriptionName, createdTime, isPause, minutes, seconds } = item

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

export default TaskList
