import React, { Component } from "react";
import { Nav, Form, FormControl, Button, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../SideNavBar/sidenav.css";
import icon from "../SideNavBar/mvicon.jpeg";

class SideNavBar extends Component {
  state = {};

  constructor() {
    super();
    console.log("constructor call");
    this.state = {
      style: "menu",
      menuStatus: "closed",
    };
  }

  handleClick = () => {
    switch (this.state.menuStatus) {
      case "closed":
        this.setState({
          menuStatus: "open",
          style: "menu active",
        });
        break;
      case "open":
        this.setState({
          menuStatus: "closed",
          style: "menu",
        });
        break;
    }
  };

  render() {
    return (
      <div>
        {/* <Button
          variant="success"
          onMouseEnter={this.handleClick}
          onClick={this.handleClick}
          className='menubtn'
        >
        </Button> */}
        {/* <div className="icon" 
        onClick={this.handleClick}
        onMouseEnter={this.handleClick}
        >
        </div> */}
        <img src={icon} 
        onClick={this.handleClick}
        onMouseEnter={this.handleClick}
         className="iconimg"></img>

        <div className={this.state.style}>
          <ul>
            {this.props.navs.map(({ url, name }) => (
              <li>
                <NavLink className="nli" to={url} onClick={this.handleClick}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SideNavBar;
