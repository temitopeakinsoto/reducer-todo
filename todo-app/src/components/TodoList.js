
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.toDoItems.map(item => (
        <Todo key={item.id} taskData={item} toggleTask={props.toggleTask} />
      ))}
    </div>
  );
};

export default TodoList;

