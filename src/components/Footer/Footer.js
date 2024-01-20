import './Footer.css'

import TasksFilter from '../TasksFilter/TasksFilter'

const Footer = (props) => {
  const { todoCount, onClearCompleted, onAllTask, onActiveTask, onCompletedTask, filter } = props
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TasksFilter
        filter={filter}
        onAllTask={() => {
          onAllTask()
        }}
        onActiveTask={() => {
          onActiveTask()
        }}
        onCompletedTask={() => {
          onCompletedTask()
        }}
      />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
