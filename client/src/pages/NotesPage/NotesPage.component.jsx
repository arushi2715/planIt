import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Notes from "../../components/Notes/Notes.component";
import "./NotesPage.styles.css";

function NotesPage() {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);

  async function getNotes() {
    const result = await fetch(
      "https://jot-diaries.herokuapp.com/notes/getNotes",
      {
        method: "GET",
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );

    const data = await result.json();

    if (data.status === false) {
      window.alert(data.message);
    } else setNotes(data.notes);
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      getNotes();
    }
  }, []);

  const userNotes = notes.map((note) => {
    return note;
  });

  return (
    <div>
      <div className="notes-container">
        <Notes getNotes={getNotes} notes={userNotes} />
      </div>
    </div>
  );
}

export default NotesPage;
