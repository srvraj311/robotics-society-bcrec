import React, { Component } from "react";

import "./css/about.css";

export default class About extends Component {
  render() {
    return (
      <div className="main" id="about">
        <div className="main__container">
          <div className="main__img--container">
            {/* <!-- <div className="main__img--card"><i className="fas fa-layer-group"></i></div> --> */}
          </div>
          <div className="main__content">
            <h1>What do we do</h1>
            <h2>Make Project which Can Make an Impact</h2>
            <p>KEEP IT SIMPLE AND STUPID</p>
            <button className="main__btn">
              <a href="Our_Alumni.html">SEE OUR ALUMNI</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
