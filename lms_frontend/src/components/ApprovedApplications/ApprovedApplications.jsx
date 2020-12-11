import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const ApprovedApplications = (props) => {
  const [applns, setApplns] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:8080/lms/employee/applications-approved`).then(
      (res) => {
        console.log(res.data);
        if (!res.data.error) {
          setApplns(res.data.response);
        }
      }
    );
  }, []);

  if (applns.length > 0) {
    return (
      <div
        className="col-md-8 offset-md-2 mt-5 card card-body"
        style={{ fontFamily: "courier new" }}
      >
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Application ID</th>
              <th>Name</th>
              <th>Approved On</th>
              <th>Approver Id</th>
              <th>statusId</th>
            </tr>
          </thead>
          <tbody>
            {applns.map((appln) => {
              let date = new Date(appln.status.approvedOn);

              return (
                <tr>
                  <td>{appln.applicationId}</td>
                  <td>
                    {appln.firstName} {appln.lastName}
                  </td>
                  <td>
                    {date.toLocaleDateString()} {date.getHours()}:
                    {date.getMinutes()}:{date.getSeconds()}{" "}
                    {date.getHours() >= 12 ? "PM" : "AM"}
                  </td>
                  <td>{appln.status.approverId}</td>
                  <td>{appln.status.statusId}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  } else {
    return (
      <div
        className="col-md-6 offset-md-3 mt-5"
        style={{ fontFamily: "courier new", textAlign: "center" }}
      >
        <h1>No Approved Applications</h1>
      </div>
    );
  }
};

export default ApprovedApplications;
