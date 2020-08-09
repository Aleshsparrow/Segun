import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          <Col className="pic" xs={12} sm={6} md={6} lg={6} xl={6}>
            <img
              src="https://i.imgur.com/wsRpryK.jpg"
              title="Segun: imgur.com"
            />
          </Col>
          <Col className="bio" xs={12} sm={6} md={6} lg={6} xl={6}>
            <div>
              <h1>Segun Alesinloye</h1>
              <h5>Chicago, 60618 | (872) 203-5491 | segunalesh@gmail.com</h5>
              <h3 className="full">
                Full Stack Web Developer/Software Engineer
              </h3>
              <br></br>
              <h4>
                My name is Segun Alesinloye, my pronouns are Him/His/He. I am a
                full Stack Web Developer/Software Engineer with profiency in
                technologies like{" "}
                <span>
                  HTML, CSS, JavaScript and I have experience working with CCS
                  libraries such as Materialize and Bootstrap.
                </span>{" "}
                I am also vast in JavaScript based frameworks such as:{" "}
                <span>jQuery, Node JS, React JS, Express JS and so on....</span>
              </h4>
              <br />
              <br />
              <br />
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
