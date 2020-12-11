import React, { useState } from "react";
import { Form, Button, Spinner, Alert, NavLink } from "react-bootstrap";
import axios from "axios";
import "./register.css";

const Register = (props) => {
  const [user, setUser] = useState({
    roleId: 3,
  });

  const [alert, setAlert] = useState();

  const validateUser = (u) => {
    const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const rePass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (reEmail.test(u.userEmail) && rePass.test(u.password)) {
      return "OK";
    } else if (reEmail.test(u.userEmail)) {
      return "invalid password";
    } else if (reEmail.test(u.password)) {
      return "invalid email";
    } else {
      return "invalid";
    }
  };

  const regUser = (event) => {
    setAlert(<Spinner animation="border" variant="success" />);
    event.preventDefault();
    console.log(user);
    console.log(validateUser(user));
    validateUser(user);
    switch (validateUser(user)) {
      case "OK":
        axios
          .post("http://localhost:8080/lms/user/register", user)
          .then((res) => {
            console.log(res);
            console.log(res.data);
            if (res.data.error) {
              setAlert(
                <Alert variant="danger">
                  Unable to register Please Try Later
                </Alert>
              );
            } else {
              setAlert(
                <Alert variant="success">
                  <span>
                    Registration Successfull you can
                    <NavLink href="/login">login</NavLink> here
                  </span>
                </Alert>
              );
              document.regform.reset();
            }
          });
        break;
      case "invalid email":
        setAlert(<Alert variant="danger">Please Enter a valid Email</Alert>);
        break;
      case "invalid password":
        setAlert(<Alert variant="danger">Please Enter a valid password</Alert>);
        break;
      case "invalid":
        setAlert(
          <Alert variant="danger">
            Please Enter a valid password and Email
          </Alert>
        );
        break;
      default:
        setAlert(<Alert variant="info">unknown error</Alert>);
        break;
    }
  };

  return (
    <div className="col-md-4 offset-md-4 mt-5 card card-body regblock">
      {alert}
      <Form name="regform">
        <div className="offset-4">
          <h2>
            <strong>Welcome</strong>
          </h2>
        </div>
        <hr></hr>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              const val = e.target.value;
              setUser((prevState) => {
                return { ...prevState, userEmail: val };
              });
            }}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="email"
            placeholder="choose username"
            onChange={(e) => {
              const val = e.target.value;
              setUser((prevState) => {
                return { ...prevState, userName: val };
              });
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              const val = e.target.value;
              setUser((prevState) => {
                return { ...prevState, password: val };
              });
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          onClick={regUser}
          className="offset-5"
        >
          <strong>Register</strong>
        </Button>
      </Form>
    </div>
  );
};

export default Register;
