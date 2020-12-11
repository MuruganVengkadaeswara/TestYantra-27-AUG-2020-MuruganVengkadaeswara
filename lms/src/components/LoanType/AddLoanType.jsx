import React, { useState } from "react";
import { Form, Button,Alert, Spinner } from "react-bootstrap";
import axios from "axios";
import '../LoanType/addloan.css'

const AddLoanType = (props) => {
  const [type, setType] = useState({});
  const [alert,setAlert] = useState()

  const addtype = () => {
    console.log(type);
    setAlert(<Spinner animation="border" variant="success"/>)
    axios.post('http://localhost:8080/lms/employee/loantype',type).
    then(res=>{
        console.log(res);
        console.log(res.data.error);
        if(res.data.error){
          setAlert((<Alert variant="danger">
              unable to add loan type
            </Alert>))
        }
        else{
          setAlert((
            <Alert variant="success">
              Loan Type Added SuccessFully
            </Alert>
          ))
          document.loantypeform.reset()
        }
        
    })
  };

  return (
    <div className="col-md-4 offset-md-4 card card-body mt-5 addloanblk">
      <Form name="loantypeform">
        <h2>
          <strong>
            Loan Type Details
          </strong>
        </h2>
        <hr></hr>
        {alert}
        <hr></hr>
        <Form.Group>
          <Form.Label>Loan Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              const val = e.target.value;
              setType((prevState) => {
                return { ...prevState, loanName: val };
              });
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Interest Rate</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => {
              const val = e.target.value;
              setType((prevState) => {
                return { ...prevState, interestRate: val };
              });
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Bank Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              const val = e.target.value;
              setType((prevState) => {
                return { ...prevState, bankName: val };
              });
            }}
          ></Form.Control>
        </Form.Group>
      </Form>
      <Button variant="success" className="col-md-4 offset-md-4" onClick={addtype}>Add</Button>
    </div>
  );
};

export default AddLoanType;
