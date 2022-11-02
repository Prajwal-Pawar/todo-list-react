import '../styles/tasklist.css';
// icons
import { Trash2 } from 'react-feather';

const TaskList = ({ todo }) => {
  return (
    <div id="tasks">
      <div id="task">
        <input type="checkbox" />
        <p>{todo}</p>
      </div>
      <div id="task-delete">
        <button>
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default TaskList;
