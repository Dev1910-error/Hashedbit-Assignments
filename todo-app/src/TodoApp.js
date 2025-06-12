import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') return;

    const newTodos = [...todos, task].sort();
    setTodos(newTodos);
    setTask(''); // Clear input
  };

  const handleDeleteTask = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos.sort());
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
