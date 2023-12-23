import { formatDistanceToNow } from 'date-fns'

var result = formatDistanceToNow(
    new Date(2014, 6, 2)
  )

const Task = ({ name, time }) => {
    return (
        <div className="view">
            <input class="toggle" type="checkbox"/>
            <label>
                <span class="description">{ name }</span>
                <span class="created">{ time }</span>
            </label>
            <button class="icon icon-edit"/>
            <button class="icon icon-destroy"/>
        </div>
    );
}

export default Task;