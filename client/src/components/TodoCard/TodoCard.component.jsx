import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import "./TodoCard.styles.css";

function TodoCard(props) {
  const [todo, setTodo] = useState("");

  function handleChange(event) {
    setTodo(event.target.value);
  }

  async function createTodo(event) {
    event.preventDefault();
    const result = await fetch(
      "https://jot-diaries.herokuapp.com/todos/createTodo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify({ todo }),
      }
    );

    const data = await result.json();

    if (data.status === false) window.alert(data.message);
    else {
      window.alert(data.message);
      props.getTodos();
      setTodo("");
    }
  }

  async function getTodoDetails() {
    const todoId = localStorage.getItem("todoId");
    const result = await fetch(
      " https://jot-diaries.herokuapp.com/todos/getTodo/" + todoId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await result.json();
    console.log(data);

    if (data.status === false) window.alert(data.message);
    else {
      setTodo(data.todoDetails.todo);
    }
  }

  async function updateTodo(event) {
    event.preventDefault();
    const todoId = localStorage.getItem("todoId");
    const result = await fetch(
      " https://jot-diaries.herokuapp.com/todos/updateTodo/" + todoId,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ todo }),
      }
    );

    const data = await result.json();

    if (data.status === false) window.alert(data.message);
    else {
      window.alert(data.message);
      localStorage.removeItem("todoId");
      props.getTodos();
      setTodo("");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("todoId")) {
      getTodoDetails();
    }
  }, []);

  if (localStorage.getItem("todoId")) {
    return (
      <div>
        <div className="todo-page-heading">
          Welcome User!
          <br />
          Lets update this todo.
        </div>
        <div className="todo-form">
          <input
            className="todo-item"
            type="text"
            value={todo}
            placeholder="Write your todo here"
            onChange={handleChange}
          />
          <div className="todo-button">
            <Button
              variant="contained"
              style={{ fontSize: "1.2em" }}
              onClick={updateTodo}
            >
              Update Todo
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="todo-page-heading">
          Welcome User!
          <br />
          Lets add a new todo.
        </div>
        <div className="todo-form">
          <input
            className="todo-item"
            type="text"
            value={todo}
            placeholder="Write your todo here"
            onChange={handleChange}
          />
          <div className="todo-button">
            <Button
              variant="contained"
              style={{ fontSize: "1.2em" }}
              onClick={createTodo}
            >
              Add Todo
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoCard;
