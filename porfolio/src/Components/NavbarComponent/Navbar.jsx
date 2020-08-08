import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navi">
        <Container style={{ backgroundColor: "teal" }}>
          <Row>
            <a href="#">
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                // className="col-sm-2"
                // className="col-m-6 "
                className="navlinks"
              >
                <div style={{ boxSizing: "border-box" }}>
                  {/* Segun Alesinloye */}
                  <a href="/">Home </a>|<a href="/education"> Education </a>|
                  <a href="/projects"> Projects </a>|<a href="/tech"> Tech </a>
                </div>
              </Col>
            </a>
            <Col xs={0} sm={0} md={2} lg={2} xl={2}>
              {/* <h1>hhhhh</h1> */}
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} className="icondiv">
              {/* <FontAwesomeIcon className="icons" icon="resume" /> */}

              <a href="www.linkedin.com/in/segun-alesinloye-969771108">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
              <a href="https://github.com/Aleshsparrow">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>

              {/* <i className="glyphicon glyphicon-cloud"></i>
              <i className="glyphicon glyphicon-remove"></i>
              <i className="glyphicon glyphicon-user"></i> */}
            </Col>
          </Row>
        </Container>
      </nav>
    );
  }
}

export default Navbar;
