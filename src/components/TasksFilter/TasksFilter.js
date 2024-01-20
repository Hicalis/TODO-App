import './TasksFilter.css'

const TasksFilter = (props) => {
  const { onAllTask, onActiveTask, onCompletedTask, filter } = props

  return (
    <ul className="filters">
      <li>
        <button className={filter === 'All' ? 'selected' : null} onClick={onAllTask}>
          All
        </button>
      </li>
      <li>
        <button className={filter === 'Active' ? 'selected' : null} onClick={onActiveTask}>
          Active
        </button>
      </li>
      <li>
        <button className={filter === 'Completed' ? 'selected' : null} onClick={onCompletedTask}>
          Completed
        </button>
      </li>
    </ul>
  )
}

export default TasksFilter
