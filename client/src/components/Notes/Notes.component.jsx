import React from "react";
import NoteCard from "../NoteCard/NoteCard.component";
import CreatedNote from "../CreatedNote/CreatedNote.component";
import "./Notes.styles.css";

function Notes(props) {
  return (
    <div>
      <NoteCard getNotes={props.getNotes} />

      {props.notes.map((noteItem, index) => {
        return (
          <CreatedNote
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            getNotes={props.getNotes}
          />
        );
      })}
    </div>
  );
}

export default Notes;
