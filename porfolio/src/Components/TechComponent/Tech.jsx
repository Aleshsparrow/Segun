import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import IconReact from "react-devicon/react/original-wordmark";
import IconHandlebars from "react-devicon/handlebars/original";
import "./Tech.css";

class Tech extends Component {
  state = {};
  render() {
    return (
      <Container>
        {/* <i class="fab fa-html5"></i> */}
        {/* HTML, CSS, JavaScript, JQuery, Bootstrap, Materialize, Node JS, React JS, Express JS, MongoDB, MySQL, JSON, Media Queries, APIs. */}
        <IconHandlebars className="tech-icons" />
        <FontAwesomeIcon className="tech-icons" icon={["fab", "node"]} />
        <FontAwesomeIcon className="tech-icons" icon={["fab", "react"]} />
        <FontAwesomeIcon className="tech-icons" icon={["fab", "html5"]} />
        <FontAwesomeIcon className="tech-icons" icon={["fab", "css3-alt"]} />
        <FontAwesomeIcon className="tech-icons" icon={["fab", "npm"]} />
        <FontAwesomeIcon className="tech-icons" icon={["fab", "expressjs"]} />
        <FontAwesomeIcon className="tech-icons" icon={["fab", "jquery"]} />
        <FontAwesomeIcon className="tech-icons" icon={["fab", "js-square"]} />
        <FontAwesomeIcon className="tech-icons" icon={["fab", "api"]} />
        <FontAwesomeIcon className="tech-icons" icon={["fab", "mysql"]} />
        <FontAwesomeIcon className="tech-icons" icon={["fab", "mongodb"]} />
      </Container>
    );
  }
}

export default Tech;
