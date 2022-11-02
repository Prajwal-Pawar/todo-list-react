import '../styles/tasklist.css';

const TaskList = ({ todo }) => {
  return (
    <div id="tasks">
      <div id="task">
        <input type="checkbox" />
        <p>{todo}</p>
      </div>
      <div id="task-delete">
        <button>Remove</button>
      </div>
    </div>
  );
};

export default TaskList;
