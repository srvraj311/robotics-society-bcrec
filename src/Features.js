import React, { Component } from "react";

class Feature extends Component {
  render() {
    return (
      <div className="main" id="sign-up">
        <div className="signup__container">
          <div className="main__content">
            <h1>Join To Know More</h1>
            <h2>Want To Part Of This Creative World</h2>
            <p>SIGN-UP NOW!!</p>
            <button className="main__btn">
              <a href="Gallery.html">Sign-Up</a>
            </button>
          </div>
          <div className="main__img--container">
            <div className="main__img--card" id="card-2">
              <i className="fas fa-users"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
