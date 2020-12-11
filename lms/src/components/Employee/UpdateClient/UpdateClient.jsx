import Axios from "axios";
import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import "../UpdateClient/updatecli.css";

const UpdateClient = (props) => {
  const [clientId, setClientId] = useState();

  const forward = (e) => {
    e.preventDefault();
    console.log(clientId);
    props.history.push({
      pathname: "/employee/updateclient/client",
      id: clientId,
    });
  };

  return (
    <div className="updateblock">
      <div className="col-md-4 offset-md-4 card card-body mt-5 queryblock">
        <Form onSubmit={forward}>
          <Form.Group>
            <Form.Label>Client Id</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setClientId(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>
          <Button
            type="submit"
            onClick={forward}
            className="offset-md-5"
            variant="success"
          >
            Find
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdateClient;
