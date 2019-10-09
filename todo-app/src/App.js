import React, {useState, useReducer} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const initialState = [
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

const ADD_TASK = "ADD_TASK";
const CLEAR_FINISHED = "CLEAR_FINISHED";


function reducer(state, action) {
  switch(action.type) {
    case ADD_TASK:
        const newTask = {
          task: action.payload,
          id: Date.now(),
          completed: false
        };
        return [
          ...state, newTask
        ];
          
    case CLEAR_FINISHED:
      return
    default:
      return state;
  }
}

function App() {
  //const [tasks, setTasks] = useState(todos);
  const [tasks, dispatch] = useReducer(reducer, initialState);

  // const addTask = taskName => {
  //   const newTask = {
  //     task: taskName,
  //     id: Date.now(),
  //     completed: false
  //   };
  //   setTasks([...tasks, newTask]);
  // };

  const addTask = taskName => {
    dispatch({
      type: ADD_TASK,
      payload: taskName,
    });
  }
  console.log("state is ", initialState);
  console.log('at this point tasks is', tasks)

  const clearFinished = () => {
    //setTasks(tasks.filter(task => !task.completed));
  };

  const toggleTask = itemId => {
    // setTasks(tasks.map(task => {
    //     if (task.id === itemId) {
    //       return { ...task, completed: !task.completed };
    //     }
    //     return task;
    //   })
    // );
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
