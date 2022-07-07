import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import "./NoteCard.styles.css";

export default function NoteCard(props) {
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

  async function createNote(event) {
    event.preventDefault();
    const { title, content } = note;
    const result = await fetch(
      " https://jot-diaries.herokuapp.com/notes/createNote",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, content }),
      }
    );

    const data = await result.json();

    if (data.status === false) window.alert(data.message);
    else {
      window.alert(data.message);
      props.getNotes();
      setNote({ title: "", content: "" });
    }
  }

  async function getNoteDetails() {
    const noteId = localStorage.getItem("noteId");
    const result = await fetch(
      " https://jot-diaries.herokuapp.com/notes/getNote/" + noteId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await result.json();

    // console.log(data);
    // console.log(data.note.title);

    if (data.status === false) {
      window.alert(data.message);
    } else {
      setNote({ title: data.note.title, content: data.note.content });
    }
  }

  async function updateNote(event) {
    event.preventDefault();
    const noteId = localStorage.getItem("noteId");
    const { title, content } = note;
    const result = await fetch(
      "https://jot-diaries.herokuapp.com/notes/updateNote/" + noteId,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, content }),
      }
    );

    const data = await result.json();

    if (data.status === false) {
      window.alert(data.message);
    } else {
      window.alert(data.message);
      localStorage.removeItem("noteId");
      props.getNotes();
      setNote({ title: "", content: "" });
    }
  }

  useEffect(() => {
    if (localStorage.getItem("noteId")) {
      getNoteDetails();
    }
  }, []);

  if (localStorage.getItem("noteId")) {
    return (
      <div className="card-container">
        <div className="note-page-heading">
          Welcome User!
          <br />
          Lets update this note.
        </div>
        <form className="notes-form">
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
                      required
                      overflow="hidden"
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
                    required
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
                    onClick={updateNote}
                  >
                    Update Note
                  </Button>
                </div>
              </CardActions>
            </Card>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="card-container">
        <div className="note-page-heading">
          Welcome User.
          <br />
          Lets add some new notes.
        </div>
        <form className="notes-form">
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
                      required
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
                    required
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
                    onClick={createNote}
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
}
