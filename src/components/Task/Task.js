import { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

export default class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPause: this.props.isPause,
      id: this.props.id,
      label: this.props.name,
    }
  }

  playTimer() {
    this.props.onEditTime(this.props.id, false)
  }

  stopTimer() {
    this.props.onEditTime(this.props.id, true)
  }

  onLabelChange(event) {
    this.setState({
      id: event.target.id,
      label: event.target.value,
    })
    console.log(this.state.label)
    console.log(this.state.id)
  }

  onSubmit(event) {
    event.preventDefault()

    console.log(this.state.label)

    this.props.onEditName(parseInt(this.state.id), this.state.label)
  }

  render() {
    const { name, time, onDeleted, onCompleted, onEditing, minutes, seconds, isEditing, id } = this.props

    const task = (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onCompleted} />
        <label>
          <span className="title">{name}</span>
          <span className="description">
            <button className="icon icon-play" onClick={this.playTimer.bind(this)} />
            <button className="icon icon-pause" onClick={this.stopTimer.bind(this)} />
            {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
          </span>
          <span className="description">{formatDistanceToNow(time, { includeSeconds: true })}</span>
        </label>
        <button className="icon icon-edit" onClick={onEditing} />
        <button className="icon icon-destroy" onClick={onDeleted} />
      </div>
    )

    if (isEditing) {
      return (
        <form onSubmit={this.onSubmit.bind(this)}>
          <input id={id} type="text" className="edit" onChange={this.onLabelChange.bind(this)} defaultValue={name} />
        </form>
      )
    }

    return task
  }
}

Task.defaultProps = {
  name: '',
  time: new Date(),
  onDeleted: () => {},
  onCompleted: () => {},
  onEditing: () => {},
}

Task.propTypes = {
  name: PropTypes.string,
  time: PropTypes.object,
  onDeleted: PropTypes.func,
  onCompleted: PropTypes.func,
  onEditing: PropTypes.func,
}
