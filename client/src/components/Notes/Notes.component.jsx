import React,{useState} from "react";
import NoteCard from "../NoteCard/NoteCard.component";
import CreatedNote from "../CreatedNote/CreatedNote.component";

function Notes(){
    const[notes,setNotes]=useState([]);

    function addNote(newNote){
        setNotes(previousNotes=>{
            return[...previousNotes,newNote];
        })
    }

    function deleteNote(id){
        setNotes(previousNotes=>{
            return previousNotes.filter((noteItem,index)=>{
                return index!==id;
            })
        })
    }

    return(
        <div>
        <NoteCard onAdd={addNote}/>
        {notes.map((noteItem,index)=>{
            return(
                <CreatedNote
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
                />
            )
        })}
        </div>
    )
}

export default Notes;