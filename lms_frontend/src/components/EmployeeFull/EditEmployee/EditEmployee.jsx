import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Spinner, Table } from "react-bootstrap";
import deptlist from "../EditEmployee/deptlist.json";

const EditEmployee = (props) => {
  const [emp, setEmp] = useState({});
  const [alert, setAlert] = useState();

  useEffect(() => {
    Axios.get(
      `http://localhost:8080/lms/admin/employees/${props.location.id}`
    ).then((res) => {
      console.log(res.data);
      setEmp(res.data.response);
      console.log(emp);
    });
    window.addEventListener("popstate", () => {
      props.history.go(1);
    });
  }, [props.location.id]);

  const updateEmp = (id) => {
    setAlert(<Spinner variant="success" animation="border" />);
    Axios.put(`http://localhost:8080/lms/admin/employee`, emp).then((res) => {
      console.log(res.data.response);
      if (res.data.error) {
        setAlert(
          <Alert variant="danger">
            Unable to update Employee , please try after sometime
          </Alert>
        );
      } else {
        setAlert(
          <>
            <Alert variant="success">
              Employee Updated Successfully ... redirecting &nbsp;
              <Spinner variant="info" animation="grow" />
            </Alert>
          </>
        );
        setTimeout(() => {
          props.history.push({
            pathname: "/admin/updateEmp",
          });
        }, 5000);
      }
    });
    console.log(id);
    console.log(emp);
  };

  const goback = () => {
    setAlert(
      <>
        <Alert variant="info">
          redirecting..... &nbsp;
          <Spinner variant="info" animation="grow" />
        </Alert>
      </>
    );
    setTimeout(() => {
      props.history.push({
        pathname: "/admin/updateEmp",
      });
    }, 5000);
  };

  return (
    <div
      className="col-md-6 offset-md-3 card card-body mt-5"
      style={{ fontFamily: "courier new" }}
    >
      {alert}
      <Table bordered hover responsive striped>
        <thead>
          <th>Field</th>
          <th>Value</th>
        </thead>
        <tbody>
          {Object.keys(emp).map((key, index) => {
            if (key === "employeeId") {
              return (
                <tr>
                  <td>{key}</td>
                  <td>{emp[key]}</td>
                </tr>
              );
            } else if (key === "employeeStatus") {
              return (
                <tr>
                  <td>{key}</td>
                  <td>
                    <Form.Control
                      defaultValue={emp[key]}
                      as="select"
                      onChange={(e) => {
                        const val = e.target.value;
                        let fld = key;
                        setEmp((prevstate) => {
                          return { ...prevstate, [fld]: val };
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
                  </td>
                </tr>
              );
            } else if (key === "department") {
              return (
                <tr>
                  <td>{key}</td>
                  <td>
                    <Form.Control
                      value={emp[key]}
                      as="select"
                      onChange={(e) => {
                        const val = e.target.value;
                        let fld = key;
                        setEmp((prevstate) => {
                          return { ...prevstate, [fld]: val };
                        });
                      }}
                    >
                      {deptlist.map((dept) => (
                        <option key={dept.key} value={dept.key}>
                          {dept.name}
                        </option>
                      ))}
                    </Form.Control>
                  </td>
                </tr>
              );
            } else {
              return (
                <tr>
                  <td>{key}</td>
                  <td>
                    <Form.Control
                      type="text"
                      value={emp[key]}
                      onChange={(e) => {
                        const val = e.target.value;
                        let fld = key;
                        setEmp((prevstate) => {
                          return { ...prevstate, [fld]: val };
                        });
                      }}
                    ></Form.Control>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
      <span className="offset-md-4">
        <Button onClick={() => updateEmp(emp.employeeId)} variant="info">
          Update
        </Button>
        <Button className="ml-5" onClick={goback} variant="danger">
          cancel
        </Button>
      </span>
    </div>
  );
};

export default EditEmployee;
