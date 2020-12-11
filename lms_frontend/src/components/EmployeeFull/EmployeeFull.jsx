import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Spinner, Table } from "react-bootstrap";
import "../EmployeeFull/empfull.css";

const EmployeeFull = (props) => {
  const [emps, setEmps] = useState([]);
  const [alert, setAlert] = useState();

  const fetchAllEmployee = () => {
    Axios.get(
      `http://localhost:8080/lms/admin/employee/${props.location.id}`
    ).then((res) => {
      if (!res.data.error) {
        setEmps(res.data.response);
      }
      console.log(emps);
    });
  };

  useEffect(() => {
    console.log(props.location.id);
    fetchAllEmployee();
  }, []);

  const deleteEmp = (id) => {
    console.log(id);
    setAlert(<Spinner variant="danger" animation="border" />);
    Axios.delete(`http://localhost:8080/lms/admin/employee/${id}`).then(
      (res) => {
        console.log(res.data);
        if (res.data.error) {
          setAlert(<Alert variant="danger">Unable to delete Employee</Alert>);
        } else {
          setAlert(
            <Alert variant="success">Employee Deleted Successfully</Alert>
          );
        }
      }
    );
  };

  const updateEmp = (id) => {
    console.log(id);
    props.history.push({
      pathname: "/admin/employees/editEmployee",
      id: id,
    });
  };

  return (
    <div className="col-md-8 offset-md-2 card card-body mt-5 empsblock">
      {alert}
      <h3>
        <strong>Search Results:</strong>
      </h3>
      <Table striped hover responsive bordered>
        <thead>
          <th>EmpId</th>
          <th>Name</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Status</th>
          <th>Action</th>
        </thead>
        <tbody>
          {emps.map((emp) => {
            return (
              <tr>
                <td>{emp.employeeId}</td>
                <td>
                  {emp.firstname} {emp.lastname}
                </td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>{emp.employeeStatus}</td>
                <td>
                  <span>
                    <Button
                      variant="info"
                      id={emp.employeeId}
                      onClick={() => updateEmp(emp.employeeId)}
                    >
                      <strong>update</strong>
                    </Button>
                    <Button
                      variant="danger"
                      className="ml-4"
                      id={emp.employeeId}
                      onClick={() => deleteEmp(emp.employeeId)}
                    >
                      <strong>Delete</strong>
                    </Button>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* {emps.map((emp) => {
        return Object.keys(emp).map((key, index) => (
          <>
            <h1>{key}</h1>
            <h1>{emp[key]}</h1>
          </>
        ));
      })} */}
      {props.id}
      {props.location.search}
    </div>
  );
};

export default EmployeeFull;
