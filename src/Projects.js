import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./css/Project.css";
import ProjectsSection from "./Projects-Section/Projects-Section";

export default class Projects extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Projects" id="Projects">
          <h1>OUR PROJECTS</h1>
          <div className="Projects__Wrapper">
            {/* Projects Below */}
            <div className="Projects__card">
              {/* <h2></h2> */}
              <p>LOW COST HIGH FORM FACTOR 3D Printer</p>
              <Link to="/Projects">
                <div className="Projects__btn">
                  <button>Read More</button>
                </div>
              </Link>
            </div>

            <div className="Projects__card">
              {/* <h2>HARDWARE BASED</h2> */}
              <p>STEWART PLATFORM</p>
              <Link to="/Projects">
                <div className="Projects__btn">
                  <button>Read More</button>
                </div>
              </Link>
            </div>

            <div className="Projects__card">
              {/* <h2>HARDWARE BASED</h2> */}
              <p>HEXAPOD FOR INSPECTION </p>
              <Link to="/Projects">
                <div className="Projects__btn">
                  <button>Read More</button>
                </div>
              </Link>
            </div>

            <div className="Projects__card">
              {/* <h2>LASER CNC</h2> */}
              <p>LASER CNC </p>
              <Link to="/Projects">
                <div className="Projects__btn">
                  <button>Read More</button>
                </div>
              </Link>
            </div>

            <div className="Projects__card">
              {/* <h2>HARDWARE BASED</h2> */}
              <p>CNC FOR ENGRAVING</p>
              <Link to="/Projects">
                <div className="Projects__btn">
                  <button>Read More</button>
                </div>
              </Link>
            </div>

            <div className="Projects__card">
              {/* <h2>HARDWARE BASED</h2> */}
              <p>SMART RAILWAY SYSTEM</p>
              <Link to="/Projects">
                <div className="Projects__btn">
                  <button>Read More</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
