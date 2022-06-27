import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import signupimage from "../../assets/signup.svg";
import "./SignUp.styles.css";

function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setUser((previousValue) => {
      if (name === "username") {
        return {
          username: value,
          email: previousValue.email,
          password: previousValue.password,
          confirmPassword: previousValue.confirmPassword,
        };
      } else if (name === "email") {
        return {
          username: previousValue.username,
          email: value,
          password: previousValue.password,
          confirmPassword: previousValue.confirmPassword,
        };
      } else if (name === "password") {
        return {
          username: previousValue.username,
          email: previousValue.email,
          password: value,
          confirmPassword: previousValue.confirmPassword,
        };
      } else if (name === "confirmPassword") {
        return {
          username: previousValue.username,
          email: previousValue.email,
          password: previousValue.password,
          confirmPassword: value,
        };
      }
    });
  }

  return (
    <div className="signup-form">
      <div className="signup-container">
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
            className="signup-form-two"
            action="submit"
            style={{ backgroundColor: "#D5D5D5" }}
          >
            <div className="signupform-title">Sign Up</div>
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
            <div className="email">
              <TextField
                id="filled-basic"
                label="Email"
                variant="filled"
                className="Email"
                type="email"
                required="true"
                value={user.email}
                name="email"
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
            <div className="confirm-password">
              <TextField
                id="filled-basic"
                label="Confirm Password"
                variant="filled"
                name="confirmPassword"
                required="true"
                className="Confirm Password"
                type="password"
                value={user.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="signup-button">
              <Link to="/notes" style={{ textDecoration: "none" }}>
                <Button
                  //   className="join-button"
                  variant="contained"
                  style={{ fontSize: "1.2em" }}
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          </form>
          <div className="text">
            Already have an account? <br />
            <Link to="/login" style={{ textDecoration: "none",color:"black" }}>
              <div className="login">LOGIN</div>
            </Link>
          </div>
          {/* </div> */}
        </Container>
        <div className="signup-image">
          <img src={signupimage} alt="signup" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
