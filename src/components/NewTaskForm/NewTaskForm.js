import { useState } from 'react'
import './NewTaskForm.css'

const NewTaskForm = (props) => {
  const [label, setLabel] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  const onLabelChange = (event) => {
    setLabel(event.target.value)
  }

  const onMinuteChange = (event) => {
    const input = event.target.value
    if (!isNaN(input) && input <= 60 && input.length <= 2) {
      setMinutes(input)
    }
  }

  const onSecondChange = (event) => {
    const input = event.target.value
    if (!isNaN(input) && input <= 60 && input.length <= 2) {
      setSeconds(input)
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (label == '' || /^ *$/.test(label)) {
      return
    }
    props.onItemAdded(label, minutes, seconds)
    setLabel('')
    setSeconds('')
    setMinutes('')
  }

  return (
    <form onSubmit={onSubmit} className="new-todo-form">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={onLabelChange}
        value={label}
      />
      <input className="new-todo-form__timer" placeholder="Min" autoFocus onChange={onMinuteChange} value={minutes} />
      <input className="new-todo-form__timer" placeholder="Sec" autoFocus onChange={onSecondChange} value={seconds} />
      <button type="submit" />
    </form>
  )
}

export default NewTaskForm
