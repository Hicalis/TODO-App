import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export default class Task extends Component {
  render() {
    const { name, time, onDeleted, onCompleted, onEditing } = this.props;

    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onCompleted} />
        <label>
          <span className="description">{name}</span>
          <span className="created">{formatDistanceToNow(time, { includeSeconds: true })}</span>
        </label>
        <button className="icon icon-edit" onClick={onEditing} />
        <button className="icon icon-destroy" onClick={onDeleted} />
      </div>
    );
  }
}

Task.defaultProps = {
  name: '',
  time: new Date(),
  onDeleted: () => {},
  onCompleted: () => {},
  onEditing: () => {},
};

Task.propTypes = {
  name: PropTypes.string,
  time: PropTypes.object,
  onDeleted: PropTypes.func,
  onCompleted: PropTypes.func,
  onEditing: PropTypes.func,
};
