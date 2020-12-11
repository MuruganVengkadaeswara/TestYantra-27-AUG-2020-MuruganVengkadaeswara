import Axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";

const ChangePassword = (props) => {
  const [user, setuser] = useState(props.location.user);
  const [alert, setAlert] = useState();

  const changePassword = () => {
    setAlert(
      <Alert variant="info">
        Processing ...&emsp;
        <Spinner variant="info" animation="grow" />
      </Alert>
    );

    console.log(user);
    Axios.put(`http://localhost:8080/lms/user`, user).then((res) => {
      console.log(res.data);
      if (res.data.error) {
        setAlert(
          <Alert variant="danger">
            Unable to change password ! try after sometime
          </Alert>
        );
      } else {
        setAlert(
          <Alert variant="info">
            Password changed successfully , Redirecting...&emsp;
            <Spinner variant="info" animation="grow" />
          </Alert>
        );
        setTimeout(() => {
          props.history.push("/login");
        }, 4000);
      }
    });
  };

  return (
    <div>
      <div
        className="col-md-4 offset-md-4 card card-body mt-5"
        style={{ fontFamily: "courier new" }}
      >
        <h2>
          <strong>Change Password</strong>
        </h2>
        {alert}
        <hr></hr>
        <Form>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => {
              const val = e.target.value;
              setuser((prevState) => {
                return { ...prevState, password: val };
              });
            }}
          ></Form.Control>
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control type="password"></Form.Control>
          <Button
            onClick={changePassword}
            className="mt-3 offset-md-4"
            variant="info"
          >
            Change Password
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;
