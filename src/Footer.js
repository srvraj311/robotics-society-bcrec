import React, { Component } from "react";

import "./css/Footer.css";
class Footer extends Component {
  render() {
    return (
      // <!-- Footer Section -->
      <div className="footer__container">
        <div className="footer__links">
          <div className="footer__link--wrapper">
            <div className="footer__link__items">
              <h2>About</h2>
              <a href="/">How we Recruit</a>
              <a href="/">Benifits</a>
              <a href="/">Rules</a>
            </div>

            <div className="footer__link__items">
              <h2>Connect us</h2>
              <a href="test.html">Contact</a>
              <a href="/">Support</a>
              <a href="/">Destinations</a>
            </div>
          </div>

          <div className="footer__link--wrapper">
            <div className="footer__link__items">
              <h2>Our Achivements</h2>
              <a href="Footer.html" id="Our_Team">
                Our Team{" "}
              </a>
              <a href="Footer.html" id="We Visited">
                We Visited
              </a>
              <a href="Footer.html" id="Videos">
                Videos
              </a>
            </div>

            <div className="footer__link__items">
              <h2>Social Media </h2>
              <a href="/">Instagram</a>
              <a href="/">FaceBook</a>
              <a href="/">Linkedin</a>
            </div>
          </div>
        </div>

        {/* <!-- link and Social Media Handle of the Creater --> */}

        <section className="social__media">
          <div className="social__media--wrap">
            <div className="footer__logo">
              <a href="/" id="footer__logo">
                DEVELOPER TEAM
              </a>
            </div>

            <p className="website__rights">© Biplab Naskar 2017-2021</p>

            <div className="social__icon">
              <a
                href="https://www.facebook.com/biplab.naskar.108/"
                className="social__icon--link"
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com/biplab3009/"
                className="social__icon--link "
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/biplab-naskar-01/"
                className="social__icon--link"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
