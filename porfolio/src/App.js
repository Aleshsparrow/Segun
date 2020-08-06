import React from "react";
import Navbar from "./Components/NavbarComponent/Navbar";
import Home from "./Components/HomeComponent/Home";
import Education from "./Components/EducationComponent/Education";
import Footer from "./Components/FooterComponent/Footer";
import Tech from "./Components/TechComponent/Tech";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);
function App() {
  return (
    <Router>
      <div>
        <Navbar />;{/* <NavTabs /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/tech" component={Tech} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Footer />
      </div>
    </Router>
    // <Home />;
  );
}

export default App;
