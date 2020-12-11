import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

const ApplicationsPending = (props) => {
  const [applns, setApplns] = useState([]);
  const [app, setapp] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/lms/employee/applications-pending")
      .then((res) => {
        if (!res.data.error) {
          setApplns(res.data.response);
        }
        console.log(applns);
      });
  }, []);

  const showAppln = (id) => {
    console.log(id);
    props.history.push({ pathname: "./application", id: id });
  };

  if (applns.length > 0) {
    return (
      <div className="col-md-8 offset-md-2 card card-body tableblock">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Application Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Loan Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          {applns.map((appln) => (
            <tbody>
              <tr>
                <td>{appln.applicationId}</td>
                <td>{appln.firstName}</td>
                <td>{appln.lastName}</td>
                <td>{appln.loanAmount}</td>
                <td>
                  <Button
                    id={appln.applicationId}
                    onClick={() => showAppln(appln.applicationId)}
                  >
                    View
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        {app}
      </div>
    );
  } else {
    return (
      <div
        className="col-md-6 offset-md-3 mt-5"
        style={{ fontFamily: "courier new", textAlign: "center" }}
      >
        <h1>No pending Applications</h1>
      </div>
    );
  }
};

export default ApplicationsPending;
