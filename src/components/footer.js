import React from "react";
import logo from "../images/logo.png";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="main flex footer">
          <div class="foot-logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="flex">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <Link to="/hotels">Hotels</Link>
            </li>
            <li>
              <a href="/">Sign In</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
