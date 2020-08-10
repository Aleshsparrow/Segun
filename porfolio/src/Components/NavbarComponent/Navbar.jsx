import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navi">
        <Container>
          <Row style={{ backgroundColor: "teal", height: "70px" }}>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} className="navlinks">
              <div style={{ boxSizing: "border-box" }}>
                <a href="/">Home </a>|<a href="/education"> Education </a>|
                <a href="/projects"> Projects </a>|<a href="/tech"> Tech </a>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>
    );
  }
}

export default Navbar;
