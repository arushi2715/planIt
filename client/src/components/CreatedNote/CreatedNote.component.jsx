import React from "react";
import moment from "moment";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CreatedNote.styles.css";

function CreatedNote(props) {
  async function getNoteId() {
    localStorage.setItem("noteId", props.id);
    window.location.reload();
  }
  // function handleClick() {
  //   props.onDelete(props.id);
  // }

  // const date = new Date().getUTCDate();
  // const year = new Date().getUTCFullYear();
  // const month = new Date().getUTCMonth() + 1;

  async function deleteNote() {
    const result = await fetch(
      "https://jot-diaries.herokuapp.com/notes/deleteNote/" + props.id,
      // "http://localhost:8000/notes/deleteNote/" + props.id,
      {
        method: "DELETE",
        headers: { token: localStorage.getItem("token") },
      }
    );

    const data = await result.json();

    if (data.status === false) window.alert(data.message);
    else {
      window.alert(data.message);
      props.getNotes();
    }
  }

  const today = moment();

  return (
    <div className="created-note">
      <div className="note-header">
        <li className="created-note-title">{props.title}</li>
        <li className="created-note-date">{today.format("MM-DD-YYYY")}</li>
      </div>
      <div className="icons">
        <li className="edit-icon" style={{cursor:"pointer"}} onClick={() => getNoteId()}>
          <ModeEditOutlineIcon />
        </li>
        <li className="delete-icon" style={{cursor:"pointer"}} onClick={() => deleteNote()}>
          <DeleteIcon />
        </li>
        </div>
      <p>{props.content}</p>
    </div>
  );
}

export default CreatedNote;
