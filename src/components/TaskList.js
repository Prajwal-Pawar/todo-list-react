import '../styles/tasklist.css';
// icons
import { Trash2 } from 'react-feather';

const TaskList = ({ todo, handleComplete, handleDelete }) => {
  return (
    <div id="tasks">
      <div id="task">
        <input
          onChange={() => handleComplete(todo)}
          type="checkbox"
          // if task is completed mark checkbox as checked
          checked={todo.completed}
        />
        <p
          onClick={() => handleComplete(todo)}
          // if task is completed trigger class task-complete
          className={todo.completed ? 'task-complete' : ''}
        >
          {todo.task}
        </p>
      </div>
      <div id="task-delete">
        <button onClick={() => handleDelete(todo.id)}>
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default TaskList;
