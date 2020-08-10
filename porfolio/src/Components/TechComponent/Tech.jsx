import React, { Component } from "react";
import { Container } from "reactstrap";
import "./Tech.css";

class Tech extends Component {
  state = {};
  render() {
    return (
      <Container>
        <h2>Programing Languages and Frameworks</h2>
        <br />
        <br />
        <br />
        <i className="devicon-html5-plain-wordmark"></i>
        <i className="devicon-css3-plain-wordmark"></i>
        <i className="devicon-bootstrap-plain-wordmark"></i>
        <i className="devicon-javascript-plain"></i>
        <i className="devicon-jquery-plain-wordmark"></i>
        <i className="devicon-handlebars-plain-wordmark"></i>
        <i className="devicon-react-original-wordmark"></i>
        <i className="devicon-nodejs-plain-wordmark"></i>
        <i className="devicon-npm-original-wordmark"></i>
        <i className="devicon-express-original-wordmark"></i>
        <i className="devicon-mysql-plain-wordmark"></i>
        <i className="devicon-mongodb-plain-wordmark"></i>
      </Container>
    );
  }
}

export default Tech;
