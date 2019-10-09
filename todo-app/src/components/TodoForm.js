import React, {useState} from "react";

function TodoForm(props) {
    const {addTask, clearFinished} = props;
    const [task, setTask] = useState("")
  

  const handleChanges = e => {
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} name="task" onChange={handleChanges} 
        />
        <button>Add Todo</button>
        <button onClick={clearFinished}>Clear Completed</button>
      </form>
    );
 
}

export default TodoForm;

