import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const PaymentsFull = (props) => {
  const [payments, setpayments] = useState([]);

  useEffect(() => {
    Axios.get(
      `http://localhost:8080/lms/client/payments/${props.location.id}`
    ).then((res) => {
      console.log(res.data);
      setpayments(res.data.response);
    });
  }, [props.location.id]);

  return (
    <div
      className="col-md-6 offset-md-3 card card-body mt-5"
      style={{ fontFamily: "courier new" }}
    >
      <h2>
        <strong>Payment Details:</strong>
      </h2>
      <Table striped hover bordered bordered>
        <thead>
          <th>Payment Id</th>
          <th>Amount Paid</th>
          <th>Paid On</th>
        </thead>
        <tbody>
          {payments.map((payment) => {
            let date = new Date(payment.paidOn);
            return (
              <tr>
                <td>{payment.paymentId}</td>
                <td>&#8377; {payment.amountPaid}</td>
                <td>
                  {" "}
                  {date.toLocaleDateString()} {date.getHours()}:
                  {date.getMinutes()}:{date.getSeconds()}{" "}
                  {date.getHours() >= 12 ? "PM" : "AM"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default PaymentsFull;
