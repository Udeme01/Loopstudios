import React from "react";
import logo from "../images/logo.svg";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* logo & button menu */}
        <div className="logoNlinks">
          <div className="logo">
            <img src={logo} alt="footer logo" />
          </div>
          <ul className="footer-links">
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
        </div>

        {/* icons & copyright section */}
        <div className="footer-icons">
          <ul>
            <li>
              <GrFacebookOption />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaPinterest />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
          <div className="copyright">
            <p>&copy; 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
