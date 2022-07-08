import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import loginimage from "../../assets/login.svg";
import "./Login.styles.css";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  function handleChange(event) {
    const { value, name } = event.target;
    setUser((previousValue) => {
      if (name === "email") {
        return {
          email: value,
          password: previousValue.password,
        };
      } else if (name === "password") {
        return {
          email: previousValue.email,
          password: value,
        };
      }
    });
  }

  async function logInUser(event) {
    event.preventDefault();
    const { email, password } = user;
    const result = await fetch(
      "https://jot-diaries.herokuapp.com/auth/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await result.json();

    if (data.status === false) {
      window.alert(data.message);
    } else {
      if (data.token) {
        localStorage.setItem("token", data.token);
        window.alert(data.message);
        navigate("/profile");
        window.location.reload();
      } else {
        window.alert("Some error occurred");
      }
    }
  }

  return (
    <div className="login-form">
      <div className="login-container">
        <Container
          maxWidth="sm"
          style={{
            height: "auto",
            backgroundColor: "#3F3D56",
            paddingTop: "2%",
            marginLeft: "4%",
          }}
        >
          <form
            className="login-form-two"
            method="POST"
            style={{ backgroundColor: "#D5D5D5" }}
          >
            <div className="loginform-title">Sign In</div>
            <div className="name">
              <TextField
                label="Email"
                variant="filled"
                className="Name"
                type="text"
                required
                value={user.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="password">
              <TextField
                label="Password"
                variant="filled"
                required
                className="Password"
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="login-button">
              <Button
                onClick={logInUser}
                variant="contained"
                style={{ fontSize: "1.2em" }}
              >
                Sign In
              </Button>
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
