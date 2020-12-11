import React from "react";
import { NavLink } from "react-bootstrap";

const NotLoggedIn = (props) => {
  return (
    <div className="col-md-6 offset-md-3 card card-body mt-5" style={{alignItems:"center"}}>
      You Are Not Logged in Please 
      <NavLink href="/Login">Login</NavLink> 
      To continue
    </div>
  );
};

export default NotLoggedIn;
