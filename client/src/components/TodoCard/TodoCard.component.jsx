import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import "./TodoCard.styles.css";

function TodoCard(props){
    const[todo,setTodo]=useState("");

    function handleChange(event){
        setTodo(event.target.value);
    };

    return(
        <div className="todo-form">
        <input className="todo-item" type="text" value={todo} placeholder="Write your todo here" onChange={handleChange}/>
        <div className="todo-button">
        <Button
        variant="contained"
        style={{ fontSize: "1.2em" }}
        onClick={()=>{
            props.addItem(todo);
            setTodo("")
        }}
      >Add Todo</Button>
      </div>
        </div>
    )
}

export default TodoCard;