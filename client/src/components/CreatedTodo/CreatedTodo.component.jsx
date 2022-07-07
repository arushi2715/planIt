import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CreatedTodo.styles.css";

function CreatedTodo(props){
    async function getTodoId(){
        localStorage.setItem("todoId",props.id);
        window.location.reload();
    }

    async function deleteTodo(){
const result=await fetch(" https://jot-diaries.herokuapp.com/todos/deleteTodo/"+props.id,{
    method:"DELETE",
    headers:{
        token:localStorage.getItem("token")
    }
})

const data=await result.json();

if(data.status===false){
    window.alert(data.message);
}
else
{
    window.alert(data.message);
    props.getTodos()
}
    }
    
    return(
        <div className="created-todo">
        <li className="edit-todo-icon" style={{cursor:"pointer"}} onClick={() => getTodoId()}>
          <ModeEditOutlineIcon />
        </li>
        <li className="delete-todo-icon" style={{cursor:"pointer"}} onClick={() => deleteTodo()}>
          <DeleteIcon />
        </li>
        <li>{props.todo}</li>
        </div>
    )
}

export default CreatedTodo;