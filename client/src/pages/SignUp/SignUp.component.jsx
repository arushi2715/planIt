import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import signupimage from "../../assets/signup.svg";
import "./SignUp.styles.css";

function SignUp() {
  const navigate=useNavigate();
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

  async function formSubmit(e) {
    e.preventDefault();
    const { username, email, password, confirmPassword } = user;
    const result = await fetch(
      " https://jot-diaries.herokuapp.com/auth/signup",
      // "http://localhost:8000/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        }),
      }
    );

    console.log(result);

    const data = await result.json();

    // console.log(data);
    if(data.status===false)
    {
      window.alert(data.message);
      // console.log("error");
    }
    else{
      if(data.token){
        localStorage.setItem("token",data.token);
        navigate("/notes");
      window.alert(data.message);
      // console.log("registration done");
      }
      else{
        // console.log("hyee");
        window.alert("There was some error, Please try again later.")
      }
      // history.push("/notes");
    }
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
          // onSubmit={formSubmit}
        >
          <form
            className="signup-form-two"
            // action="submit"
            // onSubmit={formSubmit}
            style={{ backgroundColor: "#D5D5D5" }}
          >
            <div className="signupform-title">Sign Up</div>
            <div className="name">
              <TextField
                // id="filled-basic"
                label="Name"
                variant="filled"
                className="Name"
                type="text"
                required
             
                value={user.username}
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <TextField
                // id="filled-basic"
                label="Email"
                variant="filled"
                className="Email"
                type="email"
                required
                value={user.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="password">
              <TextField
                // id="filled-basic"
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
            <div className="confirm-password">
              <TextField
                // id="filled-basic"
                label="Confirm Password"
                variant="filled"
                name="confirmPassword"
                required
                className="Confirm Password"
                type="password"
                value={user.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="signup-button">
              {/* <Link to="/notes" style={{ textDecoration: "none" }}> */}
                <Button
                  //   className="join-button"
                  // authSubmit
                  onClick={formSubmit}
                  variant="contained"
                  style={{ fontSize: "1.2em" }}
                >
                  Sign Up
                </Button>
              {/* </Link> */}
            </div>
          </form>
          <div className="text">
            Already have an account? <br />
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
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
