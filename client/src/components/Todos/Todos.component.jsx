import React,{useState} from "react";
import TodoCard from "../TodoCard/TodoCard.component";
import CreatedTodo from "../CreatedTodo/CreatedTodo.component";
import "./Todos.styles.css";

function Todos(){
    const[todos,setTodos]=useState([]);

    function addItem(todo){
        setTodos(previousItems=>{
            return[...previousItems,todo]
        })
    }

    function deleteItem(id){
        setTodos(previousItems=>{
            return previousItems.filter((item,index)=>{
                return index!==id;
            })
        })
    }

return(
    <div className="todo-container">
        <div className="todo-heading">
            <h1>Add Your ToDo Items</h1>
            <TodoCard addItem={addItem}/>
        </div>
        <div>
            <ul>
            {todos.map((todoItem,index)=>{
               return (<CreatedTodo 
                key={index}
                id={index}
                todo={todoItem}
                onDelete={deleteItem}/>)
            })}
            </ul>
        </div>
    </div>
)
}

export default Todos;