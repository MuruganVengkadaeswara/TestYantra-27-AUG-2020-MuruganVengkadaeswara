import React, { useEffect, useState } from "react";
import SideNavBar from "../SideNavBar/SideNavBar";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import AddLoanType from "../LoanType/AddLoanType";
import UpdateLoanType from "../LoanType/UpdateLoanType";
import AddClient from "../Employee/AddClient/AddClient";
import ApprovedApplications from "../ApprovedApplications/ApprovedApplications";
import ApplicationsPending from "../Employee/ApplicationsAll/ApplicationsPending";
import "../EmployeeDashboard/employeedb.css";
import icon from "../EmployeeDashboard/employee.svg";
import UpdateClient from "../Employee/UpdateClient/UpdateClient";
import ApplicationFull from "../Employee/ApplicationFull/ApplicationFull";
import ClientFull from "../Employee/UpdateClient/ClientFull";
import EmployeeHome from "./EmployeeHome/EmployeeHome";
import ClientsAll from "../ClientsAll/ClientsAll";

const EmployeeDashboard = (props) => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [username, setusername] = useState();

  useEffect(() => {
    console.log("useeffect admin");
    console.log(user);
    if (user == null) {
      props.history.push("/pleaselogin");
    } else if (JSON.parse(user).roleId !== 2) {
      props.history.push("/pleaselogin");
    } else {
      let un = JSON.parse(localStorage.getItem("user")).userName;
      setusername(un);
    }
  }, []);
  return (
    <div className="empdb">
      <br></br>
      <div className="offset-md-8 wlcmtxt">
        Welcome {username}
        <img src={icon} className="icon" alt=""></img>
      </div>
      <Route exact path="/employee" component={EmployeeHome}></Route>
      <Route
        path="/employee/apprLoans"
        component={ApprovedApplications}
      ></Route>
      <Route path="/employee/pendLoans" component={ApplicationsPending}></Route>
      <Route path="/employee/addloantype" component={AddLoanType}></Route>
      <Route path="/employee/updateloantype" component={UpdateLoanType}></Route>
      <Route path="/employee/addclient" component={AddClient}></Route>
      <Route path="/employee/updateclient" component={UpdateClient}></Route>
      <Route path="/employee/application" component={ApplicationFull}></Route>
      <Route
        path="/employee/updateclient/client"
        component={ClientFull}
      ></Route>
      <Route path="/employee/clients" component={ClientsAll}></Route>
    </div>
  );
};

export default withRouter(EmployeeDashboard);
