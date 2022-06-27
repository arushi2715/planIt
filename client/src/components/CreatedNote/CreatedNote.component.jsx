import React from "react";
import moment from "moment";
import Button from "@material-ui/core/Button";
import "./CreatedNote.styles.css";

function CreatedNote(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  // const date = new Date().getUTCDate();
  // const year = new Date().getUTCFullYear();
  // const month = new Date().getUTCMonth() + 1;

  const today=moment();

  return (
    <div className="created-note">
      <div className="note-header">
        <li className="created-note-title">{props.title}</li>
        <li className="created-note-date">{today.format("MM-DD-YYYY")}</li>
      </div>
      <p>{props.content}</p>
      {/* <div className="delete-note-button"> */}
      <Button
        className="delete-note-button"
        variant="contained"
        style={{ fontSize: "1.2em" }}
        onClick={handleClick}
      >
        Delete
      </Button>
      {/* </div> */}
    </div>
  );
}

export default CreatedNote;
