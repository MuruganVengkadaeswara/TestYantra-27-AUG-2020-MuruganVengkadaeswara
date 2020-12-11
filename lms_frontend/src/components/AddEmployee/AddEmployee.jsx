import React, { useState } from "react";
import { Form, Col, Button, Alert, Spinner } from "react-bootstrap";
import deptlist from "../AddEmployee/deptlist.json";
import axios from "axios";
import "../AddEmployee/addemp.css";

const AddEmployee = (props) => {
  const [employee, setEmp] = useState({});
  const [user, setUser] = useState({});
  const [alert, setAlert] = useState();
  const [alert1, setAlert1] = useState();
  const addemp = () => {
    console.log(employee);
    console.log(user);
    setAlert(<Spinner animation="border" variant="success" />);
    setAlert1(<Spinner animation="border" variant="info" />);

    axios
      .post("http://localhost:8080/lms/admin/employee", employee)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.error) {
          setAlert(<Alert variant="danger">unable to add employee</Alert>);
        } else {
          setAlert(
            <Alert variant="success">Employee added successfully</Alert>
          );
          document.empform.reset();
        }
      });
    axios.post(`http://localhost:8080/lms/user/register`, user).then((res) => {
      console.log(res.data.response);
      if (res.data.error) {
        setAlert1(<Alert variant="danger">Unable to register user</Alert>);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setAlert1(<Alert variant="success">Registration successfull</Alert>);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  };

  return (
    <div className="card card-body col-md-6 offset-md-3 mt-5 addemp">
      {alert}
      <h2>
        <strong>Employee Details</strong>
      </h2>
      <hr></hr>
      <Form name="empform">
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) => {
                  const val = e.target.value;
                  setEmp((prevState) => {
                    return { ...prevState, firstname: val };
                  });
                }}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label> Last Name</Form.Label>
              <Form.Control
                onChange={(e) => {
                  const val = e.target.value;
                  setEmp((prevState) => {
                    return { ...prevState, lastname: val };
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
            onChange={(e) => {
              const val = e.target.value;
              setEmp((prevState) => {
                return { ...prevState, email: val };
              });
              setUser((prevState) => {
                return { ...prevState, userEmail: val };
              });
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Department</Form.Label>
          <Form.Control
            as="select"
            defaultValue="select"
            onChange={(e) => {
              const val = e.target.value;
              setEmp((prevState) => {
                return { ...prevState, department: val };
              });
            }}
          >
            <option disabled>select</option>
            {deptlist.map((dept) => (
              <option key={dept.key} value={dept.key}>
                {dept.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Designation</Form.Label>
          <Form.Control
            as="select"
            defaultValue="select"
            onChange={(e) => {
              const val = e.target.value;
              setEmp((prevState) => {
                return { ...prevState, designation: val };
              });
            }}
          >
            <option>select</option>
            <option>abc</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Employee Status</Form.Label>
          <Form.Control
            as="select"
            defaultValue="select"
            onChange={(e) => {
              const val = e.target.value;
              setEmp((prevState) => {
                return { ...prevState, employeeStatus: val };
              });
            }}
          >
            <option disabled>select</option>
            <option key="act" value="active">
              ACTIVE
            </option>
            <option key="inact" value="inactive">
              INACTIVE
            </option>
          </Form.Control>
        </Form.Group>
        <hr></hr>
        <h2>
          <strong>Registration Details</strong>
        </h2>
        <hr></hr>
        {alert1}
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  const val = e.target.value;
                  setUser((prevState) => {
                    return { ...prevState, userName: val };
                  });
                }}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Role Id</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => {
                  const val = e.target.value;
                  setUser((prevState) => {
                    return { ...prevState, roleId: val };
                  });
                }}
              >
                <option disabled>---select---</option>
                <option value="1">1 (Admin)</option>
                <option value="2">2 (Employee)</option>
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => {
                  const val = e.target.value;
                  setUser((prevState) => {
                    return { ...prevState, password: val };
                  });
                }}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control type="password"></Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>

        <Button variant="success" className="offset-md-5" onClick={addemp}>
          <strong>Add Employee</strong>
        </Button>
      </Form>
    </div>
  );
};

export default AddEmployee;
