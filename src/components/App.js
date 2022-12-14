import { useState, useEffect } from 'react';
// icons
import { Plus } from 'react-feather';
import { Toaster, toast } from 'react-hot-toast';
import '../styles/App.css';
import TaskList from './TaskList';
import { firestore } from '../configs/firebase';

function App() {
  // hooks
  const [todos, setTodos] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // create todo in firebase
  const createTodo = async (e) => {
    // prevents page reload
    e.preventDefault(e);

    if (taskInput === '') {
      console.log('Enter a task !');
      alert('Enter a task !');
      return;
    }

    await firestore
      .collection('todos')
      .add({
        task: taskInput,
        completed: false,
      })
      .then(() => {
        console.log('Task successfully created!');
        // notification
        toast.success('Task added successfully !');
      })
      .catch((error) => {
        console.log('Error creating Task: ', error);
      });

    setTaskInput('');
  };

  // read todo from firebase
  useEffect(() => {
    firestore
      .collection('todos')
      .get()
      .then((snapshot) => {
        const todo = snapshot.docs.map((doc) => {
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
    await firestore
      .collection('todos')
      .doc(todo.id)
      .update({
        // toggling the boolean value (if true then false, if false then true)
        completed: !todo.completed,
      })
      .then(() => {
        if (todo.completed === false) {
          console.log('Task successfully updated!');
          // notification
          toast.success('Task completed !');
        } else {
          console.log('Task successfully updated!');
        }
      })
      .catch((error) => {
        console.log('Error updating Task: ', error);
      });
  };

  // delete todo from firebase
  const handleDelete = async (id) => {
    await firestore
      .collection('todos')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Task successfully deleted!');
        // notification
        toast.success('Task deleted successfully !');
      })
      .catch((error) => {
        console.log('Error removing Task: ', error);
      });
  };

  return (
    <div>
      {/* rendering notifications */}
      <div>
        <Toaster />
      </div>

      <h1 id="title">Todo List</h1>
      <form onSubmit={createTodo} id="task-inputs">
        <input
          type="text"
          placeholder="What do you want to do ?"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button>
          <Plus />
        </button>
      </form>

      <p id="total-tasks">
        {/* if we have todos, print todos count, otherwise print No tasks */}
        {todos.length > 0 ? `You have ${todos.length} tasks !` : 'No tasks !'}
      </p>

      {/* Tasklist */}
      {todos.map((todo, index) => (
        <TaskList
          key={index}
          todo={todo}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
