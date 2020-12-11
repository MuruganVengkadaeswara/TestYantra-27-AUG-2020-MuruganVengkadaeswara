import React, { useEffect, useState } from "react";
import { Button, Jumbotron, Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
  withRouter,
} from "react-router-dom";
import AddEmployee from "../AddEmployee/AddEmployee";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import CarouselComp from "../Carousel/CarouselComp";
import LoanApplication from "../LoanApplication/LoanApplication";
import Login from "../Login/Login";
import NavBar from "../NavBar/NavBar";
import Register from "../Register/Register";
import HomeContents from "../HomeContents/HomeContents";
import "../Home/home.css";
import EmployeeDashboard from "../EmployeeDashboard/EmployeeDashboard";
import NotLoggedIn from "../NotLoggedIn/NotLoggedIn";
import ClientDashBoard from "../ClientDashBoard/ClientDashBoard";
import AdminContents from "../AdminDashboard/AdminContents/AdminContents";
import CheckStatus from "../CheckStatus/CheckStatus";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import ChangePassword from "../ForgotPassword/ChangePassword";

const Home = (props) => {
  const [appl, setAppl] = useState(1);
  const [navcontent, setnavcontent] = useState([]);
  const [dash, setdash] = useState(<HomeContents />);

  let loggedin;
  let roleId;
  if (localStorage.getItem("user") != null) {
    loggedin = true;
    roleId = JSON.parse(localStorage.getItem("user")).roleId;
  } else {
    loggedin = false;
  }

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem("user")).roleId);

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
        setdash(<Redirect to="/client"/>);
        break;
    }
  }, []);

  return (
    <div>
      <Router>
        <NavBar navs={navcontent} />
        {/* {ele} */}
        {/* <Switch> */}
        <Route exact path="/">
          {/* {loggedin ? <Redirect to="/admin" /> : <HomeContents />} */}
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

        {/* </Switch> */}
      </Router>
    </div>
  );
};

export default Home;
