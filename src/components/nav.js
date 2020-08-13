import React from "react";
import logo from "../images/logo.png";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <header className="flex">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="flex">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/hotels">Hotels</Link>
          </li>
          <li>
            <a href="/">Sign In</a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Nav;
