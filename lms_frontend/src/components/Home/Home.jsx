import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import LoanApplication from "../LoanApplication/LoanApplication";
import Login from "../Login/Login";
import NavBar from "../NavBar/NavBar";
import Register from "../Register/Register";
import HomeContents from "../HomeContents/HomeContents";
import "../Home/home.css";
import EmployeeDashboard from "../EmployeeDashboard/EmployeeDashboard";
import NotLoggedIn from "../NotLoggedIn/NotLoggedIn";
import ClientDashBoard from "../ClientDashBoard/ClientDashBoard";
import CheckStatus from "../CheckStatus/CheckStatus";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import ChangePassword from "../ForgotPassword/ChangePassword";

const Home = (props) => {
  const [navcontent, setnavcontent] = useState([]);
  const [dash, setdash] = useState(<HomeContents />);

  let roleId;
  if (localStorage.getItem("user") != null) {
    roleId = JSON.parse(localStorage.getItem("user")).roleId;
  }

  useEffect(() => {
    switch (roleId) {
      case null:
        setnavcontent([]);
        break;

      case 1:
        setnavcontent([
          {
            url: "/admin/addemp",
            name: "Add employee",
          },
          {
            url: "/admin/updateEmp",
            name: "Update employee",
          },
          {
            url: "/admin/addRole",
            name: "Add Role",
          },
          {
            url: "/admin/updateRole",
            name: "Update Role",
          },
        ]);
        setdash(<Redirect to="/admin" />);
        break;
      case 2:
        setnavcontent([
          {
            url: "/employee/pendLoans",
            name: "Pending Applications",
          },
          {
            url: "/employee/apprLoans",
            name: "Approved Applications",
          },
          {
            url: "/employee/addclient",
            name: "Add Client",
          },
          {
            url: "/employee/updateclient",
            name: "Update Client",
          },
          {
            url: "/employee/addloantype",
            name: "Add Loan Type",
          },
          {
            url: "/employee/updateloantype",
            name: "Update Loan type",
          },
          {
            url: "/employee/clients",
            name: "All clients",
          },
        ]);
        setdash(<Redirect to="/employee" />);
        break;
      case 3:
        setnavcontent([
          {
            url: "/client/loans",
            name: "My Loans",
          },
          {
            url: "/client/payments",
            name: "My Payments",
          },
          {
            url: "/client/apply",
            name: "Apply for loan",
          },
        ]);
        setdash(<Redirect to="/client" />);
        break;
      default:
        setnavcontent([]);
    }
  }, []);

  return (
    <div>
      <Router>
        <NavBar navs={navcontent} />
        <Route exact path="/">
          {dash}
        </Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/apply" component={LoanApplication}></Route>
        <Route path="/employee" component={EmployeeDashboard}></Route>
        <Route path="/admin" component={AdminDashboard}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/pleaselogin" component={NotLoggedIn}></Route>
        <Route path="/client" component={ClientDashBoard}></Route>
        <Route path="/applicationstatus" component={CheckStatus}></Route>
        <Route path="/forgotpassword" component={ForgotPassword}></Route>
        <Route path="/forgotpassword/change" component={ChangePassword}></Route>
      </Router>
    </div>
  );
};

export default Home;
