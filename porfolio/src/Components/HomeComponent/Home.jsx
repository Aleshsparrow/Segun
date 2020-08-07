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
              src="https://i.imgur.com/I6XFCR7.jpg"
              title="Segun: imgur.com"
            />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <div className="bio">
              <h1>Segun Alesinloye</h1>
              <h4>Chicago, 60618 | (872) 203-5491 | segunalesh@gmail.com</h4>
              <h3>Full Stack Web Developer/Software Engineer</h3>
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
              <div className="button">
                <a href="/">
                  <button>Home</button>
                </a>

                <a href="/education">
                  <button>Education</button>
                </a>
                <a href="/projects">
                  <button>Projects</button>
                </a>
                <a href="/tech">
                  <button>Tech</button>
                </a>
              </div>
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
