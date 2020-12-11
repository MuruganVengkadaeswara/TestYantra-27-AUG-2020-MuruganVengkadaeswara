import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../DeleteEmployee/deleteemployee.css";

const DeleteEmployee = (props) => {
  const [text, setText] = useState("");

  const getemp = (e) => {
    e.preventDefault();
    console.log(text);
    props.history.push({
      pathname: "/admin/employees",
      id: text,
    });
  };

  return (
    <div>
      <div className="col-md-4 offset-md-4 card card-body mt-5 delblock">
        <Form onSubmit={getemp}>
          <Form.Group>
            <Form.Label>
              <h4>
                <strong>Employee Name / Email</strong>
              </h4>
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setText(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button variant="success" className="offset-md-5" onClick={getemp}>
            <strong>Find</strong>
          </Button>
        </Form>
      </div>
      <br></br>
      <div className="card card-body col-md-8 offset-md-2 tableblock">
        {alert}
      </div>
    </div>
  );
};

export default DeleteEmployee;
