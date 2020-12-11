import React, { useState } from "react";
import { Form, Col, Button, Spinner, Alert } from "react-bootstrap";
import statelist from "../AddClient/statelist.json";
import axios from "axios";
import '../AddClient/addclient.css'

const AddClient = (props) => {
  const [client, setClient] = useState({});
  const [alert, setAlert] = useState();

  const addclient = (e) => {
    e.preventDefault();
    setAlert(<Spinner animation="border" variant="success" />);
    console.log("client");
    console.log(client);
    axios
      .post("http://localhost:8080/lms/employee/client", client)
      .then((res) => {
        console.log(res.data.response);
        if (res.data.error) {
          setAlert(<Alert variant="danger">unable to add client</Alert>);
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          setAlert(<Alert variant="success">Client Added Successfully</Alert>);
          document.clientinfo.reset();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
  };

  return (
    <div className="col-md-6 offset-md-3 card card-body mt-5 cliform">
      <Form name="clientinfo" onSubmit={addclient}>
        <div>{alert}</div>
        <h1>
          <strong>Client Information</strong>
        </h1>
        <hr></hr>
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                required
                onChange={(e) => {
                  const val = e.target.value;
                  setClient((prevState) => {
                    return { ...prevState, firstName: val };
                  });
                }}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                required
                onChange={(e) => {
                  const val = e.target.value;
                  setClient((prevState) => {
                    return { ...prevState, lastName: val };
                  });
                }}
              ></Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Enter Email"
            onChange={(e) => {
              const val = e.target.value;
              setClient((prevState) => {
                return { ...prevState, email: val };
              });
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Label>Mobile 1</Form.Label>
              <Form.Control
                type="tel"
                onChange={(e) => {
                  const val = e.target.value;
                  setClient((prevState) => {
                    return { ...prevState, mobile1: val };
                  });
                }}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Mobile 2</Form.Label>
              <Form.Control
                type="tel"
                onChange={(e) => {
                  const val = e.target.value;
                  setClient((prevState) => {
                    return { ...prevState, mobile2: val };
                  });
                }}
              ></Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Label>Address 1</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                onChange={(e) => {
                  const val = e.target.value;
                  setClient((prevState) => {
                    return { ...prevState, address1: val };
                  });
                }}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                onChange={(e) => {
                  const val = e.target.value;
                  setClient((prevState) => {
                    return { ...prevState, address2: val };
                  });
                }}
              ></Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => {
                  const val = e.target.value;
                  setClient((prevState) => {
                    return { ...prevState, state: val };
                  });
                }}
              >
                <option disabled key="select">
                  ---Select---
                </option>
                {statelist.map((st) => (
                  <option key={st.key} value={st.key}>
                    {st.name}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  const val = e.target.value;
                  setClient((prevState) => {
                    return { ...prevState, city: val };
                  });
                }}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Pin Code</Form.Label>
              <Form.Control
                type="tel"
                onChange={(e) => {
                  const val = e.target.value;
                  setClient((prevState) => {
                    return { ...prevState, pincode: val };
                  });
                }}
              ></Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Label>Client Status</Form.Label>
          <Form.Control
            as="select"
            defaultValue="select"
            onChange={(e) => {
              const val = e.target.value;
              setClient((prevState) => {
                return { ...prevState, clientStatus: val };
              });
            }}
          >
            <option disabled value="select">
              Select
            </option>
            <option key="act" value="active">ACTIVE</option>
            <option key="inact" value="inactive">INACTIVE</option>
          </Form.Control>
        </Form.Group>
        <Button
          variant="success"
          className="col-md-4 offset-md-4"
          type="submit"
          onClick={addclient}
        >
          <strong>Add</strong>
        </Button>
      </Form>
    </div>
  );
};

export default AddClient;
