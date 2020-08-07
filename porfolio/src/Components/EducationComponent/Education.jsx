import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./Home.css";

class Education extends Component {
  state = {};
  render() {
    return (
      <Container>
        <div className="edu-card">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h2>Education</h2>
              <h3 className="card-title">
                Northwestern University School of Professional Studies
              </h3>
              <h4 className="card-subtitle mb-2 text-muted">
                Certificate in Full Stack Development
              </h4>
              <p className="card-text">
                A 15-week intensive program focused on gaining technical
                programming skills in HTML5, CSS3, Javascript, JQuery,
                Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js &
                ReactJS.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h3 className="card-title">
                Federal University of Agriculture, Abeokuta, Nigeria
              </h3>
              <h4 className="card-subtitle mb-2 text-muted">
                Bachelor of Bachelor of Science: Biochemistry
              </h4>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Education;
