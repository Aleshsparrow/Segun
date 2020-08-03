import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navi">
        <div className="row">
          <a
            className="col-sm-2"
            // className="col-m-6 "
            className="name"
            href="#"
          >
            Segun Alesinloye
          </a>
          <div className="col-sm-2" className="icondiv">
            <i className="glyphicon glyphicon-cloud"></i>
            <i className="glyphicon glyphicon-remove"></i>
            <i className="glyphicon glyphicon-user"></i>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
