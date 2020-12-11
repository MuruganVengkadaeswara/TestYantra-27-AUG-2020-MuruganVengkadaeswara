import Axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Form, Spinner, Table } from "react-bootstrap";

const CheckStatus = (props) => {
  const [id, setId] = useState(-1);
  const [status, setstatus] = useState({});
  const [alert, setAlert] = useState();

  const getstatus = (e) => {
    e.preventDefault();
    setAlert(<Spinner animation="border" variant="success" />);
    console.log(id);
    Axios.get(`http://localhost:8080/lms/user/applicationstatus/${id}`).then(
      (res) => {
        console.log(res.data);
        if (res.data.error) {
          setAlert(<Alert variant="danger">Application Not Found</Alert>);
          document.appform.reset();
        } else {
          setstatus(res.data.response);
          setAlert(<Alert variant="success">Application Found</Alert>);
          document.appform.reset();
        }
      }
    );
  };

  return (
    <div>
      <div
        className="card card-body col-md-4 offset-md-4 mt-5"
        style={{ fontFamily: "courier new" }}
      >
        {alert}
        <Form name="appform" onSubmit={getstatus}>
          <Form.Group>
            <Form.Label>Application Id</Form.Label>
            <Form.Control
              type="tel"
              onChange={(e) => {
                setId(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>
          <Button variant="success" type='submit' onClick={getstatus} className="offset-md-5">
            Check
          </Button>
        </Form>
        <hr></hr>
        <Table responsive striped bordered>
          {Object.keys(status).map((key, index) => {
            if (key == "approvedOn") {
              let date = new Date(status[key]);
              return (
                <tr>
                  <td>{key}</td>
                  <td>
                    {date.toLocaleDateString()} {date.getHours()}:
                    {date.getMinutes()}:{date.getSeconds()}{" "}
                    {date.getHours() >= 12 ? "PM" : "AM"}
                  </td>
                </tr>
              );
            } else {
              return (
                <tr>
                  <td>{key}</td>
                  <td>{status[key]}</td>
                </tr>
              );
            }
          })}
        </Table>
      </div>
    </div>
  );
};

export default CheckStatus;
