import React, { useContext, useState, useEffect } from "react";
import { Nav, Form, FormControl, Button, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AppContext from "../Context/AppContext";
import brand from "./icons/bank.svg";
import menuicon from "./icons/menu.svg";
import "./nav.css";

const NavBar = (props) => {
  const [log, setLog] = useState(1);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [sidenavstate, setsidenavstate] = useState({
    menuStatus: "open",
    style: "menu",
  });

  const [btn, setBtn] = useState(
    <NavLink to="/Login">
      <Button variant="light" size="lg" className="loginbtn">
        <strong>Login</strong>
      </Button>
    </NavLink>
  );

  useEffect(() => {
    console.log("useeffect");
    if (window.location.href == "http://localhost:3000/Login") {
      setBtn();
    } else if (localStorage.getItem("user") != null) {
      setBtn(
        <Button
          variant="light"
          size="lg"
          className="loginbtn"
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "http://localhost:3000/";
          }}
        >
          <strong>Logout</strong>
        </Button>
      );
    }
  }, []);

  const handleclick = () => {
    switch (sidenavstate.menuStatus) {
      case "closed":
        setsidenavstate({
          menuStatus: "open",
          style: "menu active",
        });
        break;
      case "open":
        setsidenavstate({
          menuStatus: "closed",
          style: "menu",
        });
        break;
    }
  };

  return (
    <div>
      <Navbar variant="dark" className="nbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <img src={menuicon} className="brandlogo"
        onClick={handleclick}></img>
          <NavLink to="/">
            <Navbar.Brand>
              <img src={brand} className="brandlogo"/>
            </Navbar.Brand>
            <strong className="maint">MVBI</strong>
          </NavLink>
          &nbsp;
          <div className="subt d-none d-sm-block">(MV Bank Of India)</div>
          <Nav className="mr-auto"></Nav>
          {btn}
          {/* {ele} */}
          {/* <Button onClick = {() => con.setTheme('dark')}>theme</Button> */}
        </Navbar.Collapse>
      </Navbar>
      {/* <h1>{con.theme}</h1> */}
      <div className={sidenavstate.style}>
        <ul>
          {props.navs.map(({ url, name }) => (
            <li>
              <NavLink className="nli" to={url} onClick={handleclick}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
