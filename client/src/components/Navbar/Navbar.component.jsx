import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.styles.css";

function Navbar() {
  return (
    <nav>
      <div className="container-navbar">
        <div className="nav-item">
          <Link to="/">
            <li className="name-of-website">PlanIt</li>
          </Link>
          {/* <Link to="/notes">
            <li className="right-side-items"> Notes</li>
          </Link> */}
          <Link to="/signup">
            <li className="right-side-items">Sign Up</li>
          </Link>
          {/* <Link to="/todo">
            <li className="right-side-items">Todos</li>
          </Link> */}
          <Link to="/login">
            <li className="right-side-items">Login</li>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
