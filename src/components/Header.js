import React, { useState } from "react";
import logo from "../images/logo.svg";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [rotateBar, setRotateBar] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
    setRotateBar(!rotateBar);

  };

  return (
    <>
      {/* header container element */}
      <header className="header">
        {/* Loopstudios logo */}
        <div className="logo">
          <img src={logo} alt="Loopstudios" />
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`${navbarOpen ? 'active' : ''}`}>
          <div className="logo">
            <img src={logo} alt="Loopstudios" />
          </div>
          <ul>
            <li>
              <button>
                About
                <div className="line"></div>
              </button>
            </li>
            <li>
              <button>
                Careers
                <div className="line"></div>
              </button>
            </li>
            <li>
              <button>
                Events
                <div className="line"></div>
              </button>
            </li>
            <li>
              <button>
                Products
                <div className="line"></div>
              </button>
            </li>
            <li>
              <button>
                Support
                <div className="line"></div>
              </button>
            </li>
          </ul>
        </nav>

        {/* hamburger menu btn */}
        <button className={`menu-btn ${rotateBar ? 'rotate' : ''}`} onClick={toggleNavbar}>
          <div className={`bar bar-2 ${rotateBar}`}></div>
          <div className={`bar bar-3 ${rotateBar}`}></div>
          <div className={`bar bar-1 ${rotateBar}`}></div>
        </button>
      </header>
    </>
  );
};

export default Header;
