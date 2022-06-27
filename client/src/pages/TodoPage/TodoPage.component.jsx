import React from "react";
import Todos from "../../components/Todos/Todos.component";
import "./TodoPage.styles.css";

function TodoPage(){
    return(
        <div>
        <div className="todo-page">
            <Todos/>
            </div>
        </div>

    )
}

export default TodoPage;