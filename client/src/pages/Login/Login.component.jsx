import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import loginimage from "../../assets/login.svg";
import "./Login.styles.css";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });

  function handleChange(event) {
    const { value, name } = event.target;
    setUser((previousValue) => {
      if (name === "username") {
        return {
          username: value,
          password: previousValue.password,
        };
      } else if (name === "password") {
        return {
          username: previousValue.username,
          password: value,
        };
      }
    });
  }

  return (
    <div className="login-form">
      <div className="login-container">
        <Container
          maxWidth="sm"
          style={{
            height: "auto",
            paddingTop: "2%",
            backgroundColor: "#3F3D56",
            marginLeft: "4%",
          }}
        >
          <form
            className="login-form-two"
            action="submit"
            style={{ backgroundColor: "#D5D5D5" }}
          >
            <div className="loginform-title">Sign In</div>
            <div className="name">
              <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                className="Name"
                type="text"
                required="true"
                value={user.username}
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="password">
              <TextField
                id="filled-basic"
                label="Password"
                variant="filled"
                required="true"
                className="Password"
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="login-button">
            <Link to="/notes" style={{textDecoration:"none"}}>
              <Button
                  // className="join-button"
                variant="contained"
                style={{ fontSize: "1.2em" }}
              >
                Sign In
              </Button>
              </Link>
            </div>
          </form>
          <div className="login-text">
            New User? <br />
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="signup">SIGN UP</div>
            </Link>
          </div>
        </Container>
        <div className="login-image">
          <img src={loginimage} alt="login" />
        </div>
      </div>
    </div>
  );
}

export default Login;
