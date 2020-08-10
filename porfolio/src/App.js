import React from "react";
import Navbar from "./Components/NavbarComponent/Navbar";
import Home from "./Components/HomeComponent/Home";
import Education from "./Components/EducationComponent/Education";
import Footer from "./Components/FooterComponent/Footer";
import Tech from "./Components/TechComponent/Tech";
import Projects from "./Components/ProjectsComponent/Projects";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faFile);
function App() {
  return (
    <Router>
      <div>
        {/* Setting up routes */}
        <Navbar />;
        <Route exact path="/" component={Home} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/tech" component={Tech} />
        <Route path="/projects" component={Projects} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
