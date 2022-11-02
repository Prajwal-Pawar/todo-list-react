import '../styles/tasklist.css';

const TaskList = ({ todo }) => {
  return (
    <div id="tasks">
      {/* <div> */}
      <input type="checkbox" />
      <p>{todo}</p>
      {/* </div> */}
      {/* <div> */}
      <button>Remove</button>
      {/* </div> */}
    </div>
  );
};

export default TaskList;
