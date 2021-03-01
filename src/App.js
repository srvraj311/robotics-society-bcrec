import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

// Importing Components
import Navbar from "./Navbar";
import Home from "./Home";
import Allumuni from "./Allumuni";
import Achievements from "./Achievements";
import Projects from "./Projects";
import ProjectsSection from "./Projects-Section/Projects-Section";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Feature from "./Features";
import About from "./About";

// Importing CSS modules

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/Projects">
              <Navbar />
              <ProjectsSection />
            </Route>

            <Route path="/">
              <Navbar />
              <Home />
              <About />
              <Projects />
              <Feature />
              <Footer />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
