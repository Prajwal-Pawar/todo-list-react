import { useState } from 'react';
import '../styles/App.css';
import TaskList from './TaskList';
// icons
import { Plus } from 'react-feather';

function App() {
  // hooks
  const [todos, setTodos] = useState(['asd', 'asd', 'asd']);

  return (
    <div>
      <h1 id="title">Todo List</h1>
      <div id="task-inputs">
        <input type="text" placeholder="What do you want to do ?" />
        <button>
          <Plus />
        </button>
      </div>

      <p id="total-tasks">You have 3 tasks</p>

      {/* Tasklist */}
      {todos.map((todo, index) => (
        <TaskList key={index} todo={todo} />
      ))}
    </div>
  );
}

export default App;
