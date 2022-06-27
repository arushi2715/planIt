import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import "./NoteCard.styles.css";

export default function BasicCard(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((previousNote) => {
      return {
        ...previousNote,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div className="card-container">
      <form className="notes-form" action="submit">
        <div className="notes-card">
          <Card
            sx={{ minWidth: 275 }}
            style={{ backgroundColor: "white" }}
            variant="outlined"
          >
            <div className="note-title">
              <CardHeader
                title={
                  <TextField
                    id="standard-basic"
                    style={{ width: "100%" }}
                    label="Note title here"
                    variant="standard"
                    required="true"
                    value={note.title}
                    onChange={handleChange}
                    name="title"
                  />
                }
              ></CardHeader>
            </div>
            <CardContent>
              <div className="note-content">
                <TextField
                  id="outlined-multiline-flexible"
                  label="Note Content Here"
                  style={{ width: "100%" }}
                  multiline
                  required="true"
                  maxRows={4}
                  value={note.content}
                  onChange={handleChange}
                  name="content"
                />
              </div>
            </CardContent>
            <CardActions>
              <div className="add-note-button">
                <Button
                  variant="contained"
                  style={{ fontSize: "1.2em" }}
                  onClick={handleClick}
                >
                  Add Note
                </Button>
              </div>
            </CardActions>
          </Card>
        </div>
      </form>
    </div>
  );
}
