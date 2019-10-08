import React, {useState} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

function App() {
  const [tasks, setTasks] = useState(todos);

  const addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const clearFinished = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const toggleTask = itemId => {
    setTasks(tasks.map(task => {
        if (task.id === itemId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };
  return (
    <div className="App">
      <div className="header">
        <h2>To-Do List:</h2>
        <TodoForm addTask={addTask} clearFinished={clearFinished} />
      </div>
      <TodoList toDoItems={tasks}  toggleTask={toggleTask}/>
    </div>
  );
}

export default App;
