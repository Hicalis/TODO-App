import './Footer.css'
import { Component } from 'react'
import PropTypes from 'prop-types'

import TasksFilter from '../TasksFilter/TasksFilter'

export default class Footer extends Component {
  render() {
    const { todoCount, onClearCompleted, onAllTask, onActiveTask, onCompletedTask, filter } = this.props
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
}

Footer.defaultProps = {
  filter: 'All',
  onCompletedTask: () => {},
  onActiveTask: () => {},
  onAllTask: () => {},
  onClearCompleted: () => {},
  todoCount: 0,
}

Footer.propTypes = {
  filter: PropTypes.string,
  onCompletedTask: PropTypes.func,
  onActiveTask: PropTypes.func,
  onClearCompleted: PropTypes.func,
  onAllTask: PropTypes.func,
}
