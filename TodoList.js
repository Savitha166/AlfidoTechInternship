import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [user, setUser] = useState({ name: '', regId: '' });
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addTask = () => {
    if (taskText.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="todo-container">
      <h2>📝 To-Do List App</h2>

      <div className="user-info">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={user.name}
          onChange={handleUserChange}
        />
        <input
          type="text"
          name="regId"
          placeholder="Enter your Register ID"
          value={user.regId}
          onChange={handleUserChange}
        />
      </div>

      {user.name && user.regId && (
        <p className="welcome-msg">
          Welcome, <strong>{user.name}</strong> ({user.regId})
        </p>
      )}

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>➕ Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span>{task.text}</span>
            <div className="buttons">
              <button onClick={() => toggleTask(task.id)}>
                {task.completed ? 'Undo' : '✔ Mark Done'}
              </button>
              <button onClick={() => deleteTask(task.id)}>❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
