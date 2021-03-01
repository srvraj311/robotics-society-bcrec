import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./svg/close.svg";
import { ReactComponent as MenuIcon } from "./svg/menu.svg";
import { ReactComponent as Logo } from "./svg/ai.svg";
import "./css/App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <BrowserRouter>
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <a href="#">
              <Logo className="logo" />
            </a>
          </div>
          <a href="#home" className="logo-name">
            ROBOTICS SOCIETY
          </a>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#home" to="/home">
                HOME
              </a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#about" to="/about">
                ABOUT
              </a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#Projects">PROJECTS</a>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <a to="/signin">SIGN-IN</a>
            </li>
            <li className=" option mobile-option" onClick={closeMobileMenu}>
              <a to="/signup" className="sign-up">
                SIGN-UP
              </a>
            </li>
          </ul>
        </div>
        <ul className="signin-up">
          <li className="sign-in" onClick={closeMobileMenu}>
            <a to="/signin">SIGN-IN</a>
          </li>
          <li onClick={closeMobileMenu}>
            <a to="/signup" className="signup-btn">
              SIGN-UP
            </a>
          </li>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}
