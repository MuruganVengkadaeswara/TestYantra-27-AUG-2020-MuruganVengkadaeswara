import Axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";

const Payment = (props) => {
  const [payment, setpayment] = useState({
    loanId: props.location.id,
    fines: 0,
  });
  const [alert, setAlert] = useState();

  const makepayment = () => {
    setAlert(
      <Alert variant="info">
        Processing...&emsp;
        <Spinner variant="info" animation="grow" />
      </Alert>
    );
    Axios.post(`http://localhost:8080/lms/client/payment`, payment).then(
      (res) => {
        console.log(res.data);
        if (res.data.error) {
          setAlert(
            <Alert variant="danger">Unable to make payment ! try later</Alert>
          );
        } else {
          setAlert(
            <Alert variant="success">
              Payment successfull ,Payment id: {res.data.response.paymentId}{" "}
              <br></br>
              Redirecting ... &emsp;{" "}
              <Spinner variant="success" animation="grow" />
            </Alert>
          );
          setTimeout(() => {
            props.history.push("/client/loans");
          }, 4000);
        }
      }
    );
    console.log(payment);
  };

  return (
    <div
      className="col-md-4 offset-md-4 card card-body mt-5"
      style={{ fontFamily: "courier new" }}
    >
      {alert}
      <Form>
        <Form.Group>
          <Form.Label>Loan Id : {props.location.id}</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Amount</Form.Label>
          <Form.Control
            type="tel"
            onChange={(e) => {
              const val = e.target.value;
              setpayment((prevstate) => {
                return { ...prevstate, amountPaid: val, paidOn: Date.now() };
              });
            }}
          ></Form.Control>
        </Form.Group>
        <Button
          onClick={() => {
            makepayment();
          }}
          variant="success"
          className="offset-md-4"
        >
          Make Payment
        </Button>
      </Form>
    </div>
  );
};

export default Payment;
