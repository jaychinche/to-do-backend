import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const getTodos = async () => {
    const res = await axios.get('https://35.154.224.20:3001/todos');
    setTodos(res.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = async () => {
    await axios.post('https://35.154.224.20:3001/todos', { task });
    getTodos();
    setTask('');
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>📝 ToDo List</h2>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
