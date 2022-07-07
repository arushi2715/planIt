import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Todos from "../../components/Todos/Todos.component";
import "./TodoPage.styles.css";

function TodoPage(){
    const navigate=useNavigate();

    const[todos,setTodos]=useState([]);

    async function getTodos(){
        const result=await fetch("https://jot-diaries.herokuapp.com/todos/getTodos",{
            method:"GET",
            headers:{
                token:localStorage.getItem("token"),
            }
        })

        const data=await result.json();

        if(data.status===false){
            window.alert(data.message)
        }
        else{
            setTodos(data.todos);
        }
    }

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/");
        }
        else{
            getTodos();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const userTodos=todos.map((todo)=>{
        return todo;
    });

    return(
        <div>
        <div className="todo-page">
            <Todos getTodos={getTodos} todos={userTodos}/>
            </div>
        </div>

    )
}

export default TodoPage;