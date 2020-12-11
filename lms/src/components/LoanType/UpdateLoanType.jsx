import React, { useState, useEffect } from "react";
import { Alert, Button, FormControl, Spinner, Table } from "react-bootstrap";
import axios from "axios";
import "../LoanType/updateloan.css";
import ReactDOMServer from "react-dom/server";
import Axios from "axios";

const UpdateLoanType = (props) => {
  const [loantypes, setloantypes] = useState([]);
  const [btn, setbtn] = useState();
  const [alert, setAlert] = useState();

  useEffect(() => {
    axios.get("http://localhost:8080/lms/employee/loantypes").then((res) => {
      console.log(res.data);
      setloantypes(res.data.response);
      console.log(loantypes);
    });
  }, []);

  const edit = (id) => {
    console.log(id);
    let ln = document.getElementById(`${id}_lname`).innerText;
    let ir = document.getElementById(`${id}_inr`).innerText;
    document.getElementById(
      `${id}_lname`
    ).innerHTML = ReactDOMServer.renderToString(
      <FormControl type="text" id={`${id}_nlname`} value={ln}></FormControl>
    );
    document.getElementById(
      `${id}_inr`
    ).innerHTML = ReactDOMServer.renderToString(
      <FormControl type="tel" id={`${id}_ninr`} value={ir}></FormControl>
    );

    // document.getElementById(
    //   `${id}_edit`
    // ).innerHTML = ReactDOMServer.renderToString(
    //   <Button variant="success" id={id}>
    //     Update
    //   </Button>
    // );
  };

  const update = (id) => {
    console.log(id);
    let obj;
    if (
      document.getElementById(`${id}_nlname`) != null &&
      document.getElementById(`${id}_ninr`) != null
    ) {
      setAlert(<Spinner variant="success" animation="border" />);
      obj = {
        loanTypeId: document.getElementById(`${id}_lid`).innerText,
        loanName: document.getElementById(`${id}_nlname`).value,
        interestRate: document.getElementById(`${id}_ninr`).value,
        bankName: document.getElementById(`${id}_bname`).innerText,
      };
      Axios.put(`http://localhost:8080/lms/employee/loantype`, obj).then(
        (res) => {
          console.log(res.data);
          if (res.data.error) {
            setAlert(
              <Alert variant="danger">
                Unable to update Loan Type , Please try after sometime ... refreshing....&nbsp;
                <Spinner variant="success" animation="grow" />
              </Alert>
            );
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          } else {
            setAlert(
              <Alert variant="success">
                Loan Type updated successfully ... refreshing....&nbsp;
                <Spinner variant="info" animation="grow" />
              </Alert>
            );
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }
        }
      );
      console.log(obj);
    }
  };

  const deleteType = (id) => {
    setAlert(<Spinner variant="danfer" animation="border" />);
    Axios.delete(`http://localhost:8080/lms/employee/loantypes/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.error) {
        setAlert(
          <Alert variant="danger">
            unable to delete loan type &emsp;
            <Spinner variant="success" animation="grow" />
          </Alert>
        );
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        setAlert(
          <Alert variant="success">
            Loan type deleted successfully &emsp;
            <Spinner variant="info" animation="grow" />
          </Alert>
        );
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    });
  };

  return (
    <div className="card card-body mt-5 col-md-8 offset-md-2 tableblk">
      {alert}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Loan Name</th>
            <th>Interest Rate</th>
            <th>Bank Name</th>
            <th>Edit</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {loantypes.map((type) => (
            <tr id={`${type.loanTypeId}_tr`}>
              <td id={`${type.loanTypeId}_lid`}>{type.loanTypeId}</td>
              <td id={`${type.loanTypeId}_lname`}>{type.loanName}</td>
              <td id={`${type.loanTypeId}_inr`}>{type.interestRate}</td>
              <td id={`${type.loanTypeId}_bname`}>{type.bankName}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => edit(type.loanTypeId)}
                  id={`${type.loanTypeId}_edit`}
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  variant="success"
                  onClick={() => update(type.loanTypeId)}
                  id={type.loanTypeId}
                >
                  Update
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => deleteType(type.loanTypeId)}
                  id={type.loanTypeId}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UpdateLoanType;
