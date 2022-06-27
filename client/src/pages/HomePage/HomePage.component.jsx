import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.styles.css";
import note from "../../assets/note.svg";
import Button from '@material-ui/core/Button';


function HomePage(){
    return(
    <div className="homepage">
    <div className="pagetext">
        <div className="heading">
            LETS GET STARTED.
        </div>
        <div className="content">
            A one place to keep track of your daily notes and your todos.<br/>
            <span className="motivation">
            Lacking Motivation to jot down your daily tasks?<br/>
            </span>
            <span className="worry">DON'T WORRY.
            </span>
            We have interesting blogs for you to help you keep motivated.
        </div>
        </div>
        <div className="image">
            <img src={note} alt="note"/>
        </div>
        <div className="button">
        <Link to="/signup" style={{textDecoration:"none"}}>
        <Button className="join-button" variant="contained" style={{fontSize:"1.2em"}}>JOIN NOW</Button></Link>
        </div>
    </div>
    )
}

export default HomePage;