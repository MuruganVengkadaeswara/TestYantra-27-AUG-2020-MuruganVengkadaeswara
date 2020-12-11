import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import usericon from "./icons/user.svg";
import passicon from "./icons/password.svg";
import "./login.css";
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  withRouter,
} from "react-router-dom";
import axios from "axios";
function Login(props) {
  const [creds, setCreds] = useState({
    userEmail: "",
    password: "",
  });

  const [alert, setAlert] = useState();

  const getcreds = (e) => {
    e.preventDefault();
    console.log(creds);
    axios.post("http://localhost:8080/lms/user/login", creds).then((res) => {
      console.log(res);
      console.log(res.data);
      if (!res.data.error) {
        localStorage.setItem("user", JSON.stringify(res.data.response));
        switch (res.data.response.roleId) {
          case 1:
            window.location.href = "http://localhost:3000/admin";
            break;
          case 2:
            window.location.href = "http://localhost:3000/employee";
            break;
          case 3:
            window.location.href = "http://localhost:3000/client";
            break;
          default:
            props.history.push("/Login");
        }
      } else {
        setAlert(
          <Alert animation="border" variant="danger">
            Invalid Credentials
          </Alert>
        );
      }
    });
  };

  return (
    <div className="card card-body col-md-4 offset-md-4  loginbody">
      <h2 className="offset-4">
        <strong>Welcome</strong>
      </h2>
      <hr></hr>
      {alert}
      <Form onSubmit={getcreds}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <span>
              <img src={usericon} alt="" className="iconset" />
            </span>
            UserName
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email or username"
            onChange={(e) => {
              const val = e.target.value;
              setCreds((prevState) => {
                return { ...prevState, userEmail: val };
              });
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <span>
              <img src={passicon} alt="" className="iconset" />
            </span>
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              const val = e.target.value;
              setCreds((prevState) => {
                return { ...prevState, password: val };
              });
            }}
          />
        </Form.Group>
        <small>
          <strong>
            <NavLink to="/forgotPassword">Forgot Password?</NavLink>
          </strong>
        </small>

        <Button onClick={getcreds} variant="success" className="offset-5">
          <strong>Login</strong>
        </Button>
      </Form>
      <NavLink to="/register" className="offset-5">
        <strong>New User? Register Here</strong>
      </NavLink>
    </div>
  );
}

export default withRouter(Login);
