import React from "react";
import "./CreatedTodo.styles.css";

function CreatedTodo(props){
    return(
        <div className="created-todo">
       <div onClick={()=>{props.onDelete(props.id)}}>
        <li>{props.todo}</li>
        </div>
        </div>
    )
}

export default CreatedTodo;