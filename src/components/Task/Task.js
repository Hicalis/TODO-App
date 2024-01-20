import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'

const Task = (props) => {
  const { name, time, onDeleted, onCompleted, onEditing, minutes, seconds, isEditing, id } = props

  const [ids, setId] = useState(props.id)
  const [label, setLabel] = useState(props.name)

  const playTimer = () => {
    props.onEditTime(props.id, false)
  }

  const stopTimer = () => {
    props.onEditTime(props.id, true)
  }

  const onLabelChange = (event) => {
    setId(event.target.id)
    setLabel(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    props.onEditName(parseInt(ids), label)
  }

  const task = (
    <div className="view">
      <input className="toggle" type="checkbox" onClick={onCompleted} />
      <label>
        <span className="title">{name}</span>
        <span className="description">
          <button className="icon icon-play" onClick={playTimer} />
          <button className="icon icon-pause" onClick={stopTimer} />
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
      <form onSubmit={onSubmit}>
        <input id={id} type="text" className="edit" onChange={onLabelChange} defaultValue={name} />
      </form>
    )
  }

  return task
}
export default Task
