import React, { useState } from "react";
import { Button, Form, Alert, Spinner } from "react-bootstrap";
import axios from "axios";
import "../AddRole/addrole.css";

const AddRole = (props) => {
  const [role, setRole] = useState({
    roleId: "",
    roleDescription: "",
  });

  const [alert, setAlert] = useState();

  let handleSubmit = () => {
    setAlert(<Spinner animation="border" />);
    console.log(role);

    axios
      .post("http://localhost:8080/lms/admin/manage-roles", role)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.error) {
          setAlert(<Alert variant="danger">Unable to add Role</Alert>);
        } else {
          setAlert(
            <Alert variant="success">
              {res.data.response.roleDescription} added successfully
            </Alert>
          );
          document.roleform.reset();
        }
      });
  };

  return (
    <div className="col-md-4 offset-md-4 card card-body mt-5 addroleblk">
      {alert}
      <Form name="roleform">
        <h2>
          <strong>Role Details</strong>
        </h2>
        <hr></hr>
        <Form.Group>
          <Form.Label>Role Id</Form.Label>
          <Form.Control
            type="text"
            defaultValue={props.roleId}
            onChange={(e) => {
              const val = e.target.value;
              setRole((prevState) => {
                return { ...prevState, roleId: val };
              });
              
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Role Description</Form.Label>
          <Form.Control
            type="text"
            defaultValue={props.roleDescription}
            onChange={(e) => {
              const val = e.target.value;
              setRole((prevState) => {
                return { ...prevState, roleDescription: val };
              });
            }}
          ></Form.Control>
        </Form.Group>
        <Button
          onClick={handleSubmit}
          variant="success"
          size="lg"
          className="offset-md-4"
        >
          Add Role
        </Button>
      </Form>
    </div>
  );
};

export default AddRole;
