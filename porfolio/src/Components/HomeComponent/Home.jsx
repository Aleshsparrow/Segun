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
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className="pic">
              <img
                className="picture"
                src="https://i.imgur.com/wsRpryK.jpg"
                title="Segun: imgur.com"
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className="bio">
              <h1>Segun Alesinloye</h1>
              <h5>Chicago, 60618 | (872) 203-5491 | segunalesh@gmail.com</h5>
              <h3 className="full">
                Full Stack Web Developer/Software Engineer
              </h3>
              <br></br>
              <h4>
                My name is Segun Alesinloye, my pronouns are He/Him/His. I am a
                full Stack Web Developer/Software Engineer with profiency in
                technologies like
                <span>
                  HTML, CSS, JavaScript and I have experience working with CCS
                  libraries such as Materialize and Bootstrap.
                </span>
                I am also vast in JavaScript based frameworks such as: jQuery,
                Node JS, React JS, Express JS and so on. Click on the
                <span> Projects</span> directory to see some projects I have
                worked on.
                <br />
                <br />
                <Col
                  style={{ boxSizing: "border-box" }}
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <div className="icondiv">
                    <a href="www.linkedin.com/in/segun-alesinloye-969771108">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                    <a href="https://github.com/Aleshsparrow">
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                  </div>
                </Col>
              </h4>
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
