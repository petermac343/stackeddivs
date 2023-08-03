import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Links = () => (
  <>
    <li className="name">
      <a href="#home">Home</a>
    </li>
    <li className="name">
      <a href="#about">Tutorials</a>
    </li>
    <li className="name">
      <a href="#menu">Teachers</a>
    </li>
    <li className="name">
      <a href="#awards">FAQs</a>
    </li>
    <li className="name">
      <a href="#contact">Account</a>
    </li>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1 className="logo">App Logo</h1>
      </div>
      <ul className="links">
        <Links />
      </ul>
      <div className="login">
        <a href="#login" className="name">
          Log In /Sign Up
        </a>
        <div />
        <a href="/" className="name">
          Account
        </a>
      </div>
      <div className="smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="s_overlay flex__center slide-bottom">
            <AiOutlineClose
              fontSize={27}
              className="close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="s_links">
              <Links />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
