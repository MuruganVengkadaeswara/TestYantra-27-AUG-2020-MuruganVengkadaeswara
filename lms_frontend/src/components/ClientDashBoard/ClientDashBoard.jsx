import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import "../ClientDashBoard/clientdb.css";
import icon from "../ClientDashBoard/clients.svg";
import LoanApplication from "../LoanApplication/LoanApplication";
import MyLoans from "./ClientOps/MyLoans";
import Payment from "./ClientOps/Payment";
import MyPayments from "./ClientOps/MyPayments";
import PaymentsFull from "./ClientOps/PaymentsFull";
import ClientContents from "./ClientContents/ClientContents";

const ClientDashBoard = (props) => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [username, setusername] = useState();

  useEffect(() => {
    console.log("useeffect admin");
    console.log(user);
    if (user == null) {
      props.history.push("/pleaselogin");
    } else if (JSON.parse(user).roleId !== 3) {
      props.history.push("/pleaselogin");
    } else {
      let un = JSON.parse(localStorage.getItem("user")).userName;
      setusername(un);
    }
  }, []);

  return (
    <div>
      <div className="offset-md-8 wlcmtxt mt-5">
        Welcome {username}
        <img src={icon} className="icon" alt=""></img>
      </div>
      {/* <Router> */}
      <Route path="/client/apply" component={LoanApplication}></Route>
      <Route path="/client/loans" component={MyLoans}></Route>
      <Route path="/client/payment" component={Payment}></Route>
      <Route path="/client/payments" component={MyPayments}></Route>
      <Route path="/client/payments/paymentfull" component={PaymentsFull}></Route>
      <Route exact path="/client" component={ClientContents}></Route>
      {/* </Router> */}
    </div>
  );
};

export default withRouter(ClientDashBoard);
