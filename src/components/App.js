import { useState, useEffect } from 'react';
// icons
import { Plus } from 'react-feather';
import '../styles/App.css';
import TaskList from './TaskList';
import { firestore } from '../configs/firebase';

function App() {
  // hooks
  const [todos, setTodos] = useState([]);

  // create todo in firebase

  // read todo from firebase
  useEffect(() => {
    firestore
      .collection('todos')
      .get()
      .then((snapshot) => {
        const todo = snapshot.docs.map((doc) => {
          // let todoList = [];
          // todoList.push({ id: doc.id, ...doc.data() });

          return {
            // doc id
            id: doc.id,
            // rest doc data
            ...doc.data(),
          };
        });

        setTodos(todo);
      });
  }, [todos]);

  // update todo in firebase
  const handleComplete = async (todo) => {
    await firestore.collection('todos').doc(todo.id).update({
      // toggling the boolean value (if true then false, if false then true)
      completed: !todo.completed,
    });
  };

  // delete todo from firebase

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
        <TaskList key={index} todo={todo} handleComplete={handleComplete} />
      ))}
    </div>
  );
}

export default App;
