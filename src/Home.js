import React, { Component } from "react";
import Particles from "react-tsparticles";

import "./css/home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="hero" id="home">
        <div className="hero__container">
          <h1 className="hero__heading">
            Being Innovative is a<span> Art</span>
          </h1>
          <p className="hero__description">Welcome to Innovative World</p>
          <button className="main__btn">
            <a href="Gallery.html">EXPLORE</a>
          </button>
        </div>
      </div>
    );
  }
}
