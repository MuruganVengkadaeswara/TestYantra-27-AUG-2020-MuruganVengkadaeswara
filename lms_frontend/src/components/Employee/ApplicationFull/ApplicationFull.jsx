import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Alert, Button, Spinner, Table } from "react-bootstrap";
import "../ApplicationFull/applicationfull.css";

const ApplicationFull = (props) => {
  const [appln, setAppln] = useState({});
  const [appAlert, setAppAlert] = useState();
  const [deleteAlert, setDeleteAlert] = useState();
  const [userAlert, setUserAlert] = useState();
  const [clientAlert, setClientAlert] = useState();
  const [loanAlert, setLoanAlert] = useState();

  useEffect(() => {
    Axios.get(
      `http://localhost:8080/lms/employee/application/${props.location.id}`
    ).then((res) => {
      console.log(res.data.response);
      let app = res.data.response;
      setAppln(app);
      console.log(typeof res.data.response.loantype);
    });
  }, []);

  const approveAppln = (id) => {
    console.log(id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    //query for user

    Axios.get(`http://localhost:8080/lms/user?userEmail=${appln.email}`).then(
      (res) => {
        console.log(res.data);
        if (res.data.error) {
          let user = {
            userName: appln.firstName,
            password: "1234",
            userEmail: appln.email,
            roleId: "3",
          };
          console.log(user);
          Axios.post(`http://localhost:8080/lms/user/register`, user).then(
            (res1) => {
              console.log(res1.data.response);
              if (res1.data.error) {
                setUserAlert(
                  <Alert variant="danger">
                    Unable to register user ... try later
                  </Alert>
                );
              } else {
                setUserAlert(
                  <Alert variant="success">
                    User with {appln.email} Registered Successfully
                  </Alert>
                );
                addclient();
              }
            }
          );
        } else {
          setUserAlert(
            <Alert variant="info">
              User Already present with email : {appln.email}
              <br></br>
              Proceeding....
              <Spinner variant="success" animation="grow" />
            </Alert>
          );
          addclient();
        }
      }
    );

    setUserAlert(<Spinner variant="success" animation="border" />);
    setClientAlert(<Spinner variant="success" animation="border" />);
    setLoanAlert(<Spinner variant="success" animation="border" />);
    setAppAlert(<Spinner variant="success" animation="border" />);
  };

  const addloan = (cid) => {
    //Adding loan

    let loan = {
      loanAmount: appln.loanAmount,
      emiAmount: "23000",
      collateralType: "other property",
      collateralValue: appln.loanAmount + appln.loanAmount * 0.75,
      emiDuration: appln.loanAmount / 10000,
      pendingEmis: appln.loanAmount / 10000,
      loanTypeId: appln.loanTypeId,
      clientId: cid,
    };

    console.log(loan);

    Axios.post(`http://localhost:8080/lms/employee/loans`, loan).then((res) => {
      console.log(res.data);
      if (res.data.error) {
        setLoanAlert(
          <Alert variant="danger">
            unable to pay amount
            <Spinner variant="success" animation="grow" />
          </Alert>
        );
      } else {
        setLoanAlert(
          <Alert variant="success">
            Loan Amount Paid
            <br></br>
            Proceeding....&emsp;
            <Spinner variant="success" animation="grow" />
          </Alert>
        );
        updateStatus(appln.applicationId);
      }
    });
  };

  //update status

  const updateStatus = (id) => {
    //updating status

    let status = {
      statusId: appln.status.statusId,
      status: "approved",
      category: null,
      approverId: JSON.parse(localStorage.getItem("user")).userId,
      approvedOn: Date.now(),
    };
    console.log(status);

    Axios.put(
      `http://localhost:8080/lms/employee/manage-loanstatus/${id}`,
      status
    ).then((res) => {
      console.log(res.data);
      if (res.data.error) {
        setAppAlert(
          <Alert variant="danger">
            Could not approve Application , Please try later
          </Alert>
        );
      } else {
        setAppAlert(
          <Alert variant="success">
            Application Approved Successfully...Redirecting
          </Alert>
        );
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setTimeout(() => {
          props.history.push("/employee/pendloans");
        }, 5000);
      }
    });
  };

  const addclient = () => {
    //query for client

    Axios.get(
      `http://localhost:8080/lms/employee/client?email=${appln.email}`
    ).then((res) => {
      console.log(res.data);
      if (res.data.error) {
        let client = {
          firstName: appln.firstName,
          lastName: appln.lastName,
          address1: appln.address1,
          address2: appln.address2,
          mobile1: appln.mobileNo,
          mobile2: appln.mobileNo,
          state: appln.state,
          pincode: appln.pincode,
          email: appln.email,
          clientStatus: "Active",
        };
        Axios.post(`http://localhost:8080/lms/employee/client`, client).then(
          (res1) => {
            console.log(res.data);
            if (res1.data.error) {
              setClientAlert(
                <Alert variant="warning">
                  Failed to add {appln.email} as a client , try later &emsp;
                  <Spinner variant="secondary" />
                </Alert>
              );
            } else {
              addloan(res1.data.response.clientId);
              setClientAlert(
                <Alert variant="success">
                  client added Successfully &emsp;
                  <Spinner variant="danger" animation="grow" />
                </Alert>
              );
            }
          }
        );
        console.log(client);
      } else {
        addloan(res.data.response.clientId);
        setClientAlert(
          <Alert variant="primary">
            client Already present with email : {appln.email}
            <br></br>
            Proceeding....
            <Spinner variant="success" animation="grow" />
          </Alert>
        );
      }
    });
  };

  const rejectAppln = (id) => {
    console.log(id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setDeleteAlert(<Spinner animation="border" variant="danger" />);
    Axios.delete(`http://localhost:8080/lms/employee/application/${id}`).then(
      (res) => {
        console.log(res.data.response);
        if (res.data.error) {
          setDeleteAlert(
            <Alert variant="danger">
              Unable to reject Application , Please try after some time
            </Alert>
          );
        } else {
          setDeleteAlert(
            <Alert variant="success">
              Application Rejected ! Redirecting.... &emsp;
              <Spinner variant="danger" animation="grow" />
            </Alert>
          );
          setTimeout(() => {
            props.history.push("/employee/pendloans");
          }, 5000);
        }
      }
    );
  };

  return (
    <div className="card card-body col-md-6 offset-md-3 mt-5 applnblock">
      {deleteAlert}
      {userAlert}
      {clientAlert}
      {loanAlert}
      {appAlert}
      <Table striped bordered hover responsive>
        <thead>
          <th>Field</th>
          <th>value</th>
        </thead>
        <tbody>
          {Object.keys(appln).map((key, index) => {
            if (typeof appln[key] != "object") {
              if (key === "dob") {
                console.log(key);
                let date = new Date(appln[key]);
                return (
                  <tr>
                    <td>{key} </td>
                    <td>{date.toDateString()}</td>
                  </tr>
                );
              } else {
                return (
                  <tr>
                    <td>{key} </td>
                    <td>{appln[key]}</td>
                  </tr>
                );
              }
            } else {
              return "";
            }
          })}
        </tbody>
      </Table>
      <hr></hr>
      <div className="offset-md-4">
        <Button
          id={appln.applicationId}
          onClick={() => approveAppln(appln.applicationId)}
          variant="success"
        >
          Approve
        </Button>
        <Button
          id={appln.applicationId}
          onClick={() => rejectAppln(appln.applicationId)}
          className="ml-5"
          variant="danger"
        >
          Reject
        </Button>
      </div>
    </div>
  );
};

export default ApplicationFull;
