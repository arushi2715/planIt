import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.styles.css";

function Navbar() {
  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSignedIn(true);
    }
  }, [isSignedIn]);

  async function userLogOut() {
    localStorage.removeItem("token");
  }


  if(isSignedIn){
    return(
      <nav>
        <ul>
        <Link to="/profile">
          <li>PlanIt</li>
          </Link>
          <div className="right-side-items">
            <Link to="/profile">
              <li>Profile</li>
            </Link>
            <Link to="/notes">
              <li>Notes</li>
            </Link>
            <Link to="/todo">
              <li>Todo</li>
            </Link>
            {/* <Link to="/blogs">
              <li>Blogs</li>
            </Link> */}
            <Link to="/" onClick={()=>userLogOut()}>
              <li>Log Out</li>
            </Link>
          </div>
        </ul>
      </nav>
    )
  }
  else{
    return(
<nav>
  <ul>
    <Link to="/profile">
      <li>PlanIt</li>
    </Link>
    <div className="right-side-items">
      <Link to="/signup">
        <li>Sign Up</li>
      </Link>
      <Link to="/login">
        <li>Login</li>
      </Link>
    </div>
  </ul>
</nav>
    )
  }
}

export default Navbar;