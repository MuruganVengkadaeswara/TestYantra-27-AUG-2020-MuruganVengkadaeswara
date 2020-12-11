import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Spinner, Table } from "react-bootstrap";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState();
  const [result, setResult] = useState();
  const [alert, setAlert] = useState();
  const [user, setUser] = useState();

  const fetchUser = (e) => {
    setAlert(<Spinner variant="success" animation="border" />);
    e.preventDefault();
    console.log(email);
    Axios.get(`http://localhost:8080/lms/user?userEmail=${email}`).then(
      (res) => {
        if (res.data.error) {
          setAlert(<Alert variant="danger">User Not Found </Alert>);
        } else {
          console.log(res.data.response);
          setUser(res.data.response);
          setAlert(<Alert variant="success">User Found</Alert>);
          props.history.push({
            pathname: "/forgotpassword/change",
            user: res.data.response,
          });
        }
      }
    );
  };

  return (
    <div
      className="card card-body col-md-4 offset-md-4 mt-5"
      style={{ fontFamily: "courier new" }}
    >
      <h2>
        <strong>Forgot Password</strong>
      </h2>
      <hr></hr>
      {alert}
      <Form onSubmit={fetchUser}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="success" className="offset-5">
          Find
        </Button>
      </Form>
      {result}
    </div>
  );
};

export default ForgotPassword;
