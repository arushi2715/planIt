import React from "react";
import Notes from "../../components/Notes/Notes.component";
import "./NotesPage.styles.css";

function NotesPage(){
    return(
        <div>
            <div className="notes-container">
            <div className="note-page-heading">
                Welcome User.<br/>
                Lets add some new notes.
            </div>
            <Notes/>
            </div>
        </div>


    )
}

export default NotesPage;