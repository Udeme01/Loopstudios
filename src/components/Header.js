import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <>
      {/* header container element */}
      <header className="header">
        {/* Loopstudios logo */}
        <div className="logo">
          <img src={logo} alt="Loopstudios" />
        </div>

        {/* Mobile Navigation Menu */}
        <nav>
          <ul>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Careers</button>
            </li>
            <li>
              <button>Events</button>
            </li>
            <li>
              <button>Products</button>
            </li>
            <li>
              <button>Support</button>
            </li>
          </ul>
        </nav>

        {/* hamburger menu btn */}
        <div className="menu-btn">
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
