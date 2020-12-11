import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from "react-router-dom";
import AddEmployee from "../AddEmployee/AddEmployee";
import AddRole from "../AddRole/AddRole";
import DeleteEmployee from "../DeleteEmployee/DeleteEmployee";
import UpdateRole from "../UpdateRole/UpdateRole";
import "../AdminDashboard/admindb.css";
import icon from "../AdminDashboard/admin.svg";
import AdminContents from "./AdminContents/AdminContents";
import EmployeeFull from "../EmployeeFull/EmployeeFull";
import EditEmployee from "../EmployeeFull/EditEmployee/EditEmployee";

const AdminDashboard = (props) => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [username, setusername] = useState();

  useEffect(() => {
    console.log("useeffect admin");
    console.log(user);
    if (user == null) {
      props.history.push("/pleaselogin");
    } else if (JSON.parse(user).roleId !== 1) {
      props.history.push("/pleaselogin");
    } else {
      let un = JSON.parse(localStorage.getItem("user")).userName;
      setusername(un);
    }
  }, []);

  return (
    <div className="admindb">
      <div className="offset-md-9 wlcmtxt mt-5">
        Welcome {username}
        <img src={icon} className="icon" alt=""></img>
      </div>
      <Route path="/admin/addemp" render={() => <AddEmployee />}></Route>
      <Route path="/admin/addrole" component={AddRole}></Route>
      <Route path="/admin/updateRole" component={UpdateRole}></Route>
      <Route path="/admin/updateEmp" component={DeleteEmployee}></Route>
      <Route exact path="/admin" component={AdminContents}></Route>
      <Route path="/admin/employees" component={EmployeeFull}></Route>
      <Route
        path="/admin/employees/editEmployee"
        component={EditEmployee}
      ></Route>
    </div>
  );
};

export default withRouter(AdminDashboard);
