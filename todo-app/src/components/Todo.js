import React from "react";

const Todo = props => {
  return (
    <p
      className={`completed-${props.taskData.completed}`}
      onClick={() => props.toggleTask(props.taskData.id)}
    >
      {props.taskData.task}
    </p>
  );
};

export default Todo;
