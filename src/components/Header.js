import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  const showNav = () => {
    const navBar = document.querySelector("nav");
    const menuBtn = document.querySelector(".menu-btn");
    menuBtn.addEventListener("click", () => {
      navBar.classList.toggle("active");
      menuBtn.classList.toggle("rotate");
    });
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
        <nav>
          <div className="logo">
            <img src={logo} alt="Loopstudios" />
          </div>
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
        <div className="menu-btn" onClick={() => showNav()}>
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
