// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Welcome from './Welcome'
// import Formulaire from './Formulaire'
// import ListeCourses from './ListeCourses'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className="card">
//         <button onClick={() => setCount((count) => count - 1)}>-</button>
//         <p>count is {count}</p>
//         <button onClick={() => setCount((count) => count + 1)}>+ </button>
      
//       </div>
//       <Welcome name= "mehdi"/>
//       <Formulaire/>
//       <ListeCourses/>
//     </>
//   )
// }

// export default App
import React, { useState } from 'react';
import './App.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // Add new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  // Toggle completion (via checkbox)
  const toggleCompletion = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button onClick={addTask}>Ajouter</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTask(todo.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
