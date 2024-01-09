import { Component } from 'react'
import './NewTaskForm.css'

export default class NewTaskForm extends Component {
  constructor() {
    super()
    this.state = {
      label: '',
      minutes: '',
      seconds: '',
    }
  }

  onLabelChange(event) {
    this.setState({
      label: event.target.value,
    })
  }

  onMinuteChange(event) {
    const input = event.target.value
    if (!isNaN(input) && input <= 60 && input.length <= 2) {
      this.setState({ minutes: input })
    }
  }

  onSecondChange(event) {
    const input = event.target.value
    if (!isNaN(input) && input <= 60 && input.length <= 2) {
      this.setState({ seconds: input })
    }
  }

  onSubmit(event) {
    event.preventDefault()
    if (this.state.label == '' || /^ *$/.test(this.state.label)) {
      return
    }
    this.props.onItemAdded(this.state.label, this.state.minutes, this.state.seconds)
    this.setState({
      label: '',
      minutes: '',
      seconds: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)} className="new-todo-form">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onLabelChange.bind(this)}
          value={this.state.label}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          onChange={this.onMinuteChange.bind(this)}
          value={this.state.minutes}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          onChange={this.onSecondChange.bind(this)}
          value={this.state.seconds}
        />
        <button type="submit" />
      </form>
    )
  }
}
