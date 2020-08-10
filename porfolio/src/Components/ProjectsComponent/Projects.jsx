import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Projects.css";

class Projects extends Component {
  state = {};
  render() {
    return (
      <Container>
        <div className="pro" className="col-sm-12">
          <div className="pro-card delay1">
            <div className="row no-gutters">
              <div className="col-sm-6">
                <img
                  src="https://i.imgur.com/5sPU7RO.png"
                  className="card-img"
                  alt="..."
                />
              </div>
              <div className="col-sm-6">
                <div>
                  <h2>Hero Box</h2>
                  <p className="word">
                    A subscription based e-commerce platform that allows user to
                    subscribe to monthly delivery of comic books. I teamed up
                    with four other developers on this project.
                  </p>
                  <p>
                    <small>
                      Technologies used: HTML, CSS, JavaScript, AJAX, API,
                      React.js, Axios NPM package etc.
                    </small>
                  </p>
                  {/* <br /> */}
                  {/* <br /> */}
                  <a href="https://i.imgur.com/5sPU7RO.png">
                    <button>Link</button>
                  </a>
                  <a href="#">
                    <button>Github</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* </a> */}
          <br />
          {/* <a
style="text-decoration: none;"
href="https://sheltered-shore-12233.herokuapp.com/"
> */}

          {/* <a
      style="text-decoration: none;"
      href="https://aleshsparrow.github.io/Weather-based-suggestions/"
    > */}
          <div className="pro-card delay2">
            <div className="row no-gutters">
              <div className="col-sm-6">
                <img
                  src="https://i.imgur.com/ELCTOYy.png"
                  className="card-img"
                  alt="..."
                />
              </div>
              <div className="col-sm-6">
                <div>
                  <h2>Weather Based Suggestions</h2>
                  <p className="word">
                    A web app built for suggesting activities based on weather
                    conditions. User is required to enter a city or zip code
                    into the search area. Upon click the search button, the user
                    will be supplied with some activities and some music to go
                    with the mood. This app was built by me and one other
                    developer
                  </p>
                  <p>
                    <small>
                      Technologies used: HTML, CSS, JavaScript, jQuery, AJAX,
                      API etc.
                    </small>
                  </p>
                  {/* <br /> */}
                  <a href="https://aleshsparrow.github.io/Weather-based-suggestions/">
                    <button>Link</button>
                  </a>
                  <a href="#">
                    <button>Github</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* </a> */}
          <br />

          {/* <a
      // style="text-decoration: none;"
      href="https://aleshsparrow.github.io/Weather-Dashboard/"
    > */}
          <div className="pro-card delay3">
            <div className="row no-gutters">
              <div className="col-sm-6">
                <img
                  src="https://i.imgur.com/b7ndrpH.png"
                  className="card-img"
                  // alt="..."
                />
              </div>
              <div className="col-sm-6">
                <div>
                  <h2>Weather Dashboard</h2>
                  <p className="word">
                    A weather web app that provides user with the current and
                    five day forecast of any location entered. This was a
                    personal project.
                  </p>
                  <p>
                    <small>
                      Technologies used: HTML, CSS, jquery, AJAX, API etc.
                    </small>
                  </p>
                  {/* <br /> */}
                  {/* <br /> */}
                  {/* <br /> */}
                  <a href="https://aleshsparrow.github.io/Weather-Dashboard/">
                    <button>Link</button>
                  </a>
                  <a href="https://aleshsparrow.github.io/Weather-Dashboard/">
                    <button>Github</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* </a> */}
          <br />
          {/* <a
      style="text-decoration: none;"
      href="https://pacific-chamber-07789.herokuapp.com/"
    > */}
          <div className="pro-card delay4">
            <div className="row no-gutters">
              <div className="col-sm-6">
                <img
                  src="https://i.imgur.com/1r8qP53.png"
                  className="card-img"
                  alt="..."
                />
              </div>
              <div className="col-sm-6">
                <div>
                  <h2>Soil Time App</h2>
                  <p className="word">
                    This is a web app designed to educate farmers and plant
                    lovers about what type of plant is suitable for the soil
                    type in their locality; The app takes in user's location and
                    supplies the soil information of that location. This app was
                    a joint project, I teamed up with a three other developers
                    on this project.
                  </p>
                  <p>
                    <small>
                      Technologies used: HTML, CSS, JavaScript, AJAX, API,
                      Handlebars.js, Axios NPM package etc.
                    </small>
                  </p>
                  {/* <br /> */}
                  <a href="https://sheltered-shore-12233.herokuapp.com/">
                    <button>Link</button>
                  </a>
                  <a href="#">
                    <button>Github</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* </a> */}

          <br />
          <br />
          <br />
          <br />
        </div>
      </Container>
    );
  }
}

export default Projects;
