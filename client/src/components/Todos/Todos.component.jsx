import React from "react";
import TodoCard from "../TodoCard/TodoCard.component";
import CreatedTodo from "../CreatedTodo/CreatedTodo.component";
import "./Todos.styles.css";

function Todos(props) {
  return (
    <div className="todo-container">
      <TodoCard getTodos={props.getTodos} />
      {props.todos.map((todoItem, index) => {
        return (
          <CreatedTodo
            key={index}
            id={todoItem._id}
            todo={todoItem.todo}
            getTodos={props.getTodos}
          />
        );
      })}
    </div>
  );
}

export default Todos;
