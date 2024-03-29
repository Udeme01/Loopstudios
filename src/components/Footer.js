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
              <button>
                About <div className="line"></div>
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
        </div>

        {/* icons & copyright section */}
        <div className="footer-icons">
          <ul>
            <li>
              <GrFacebookOption />
              <div className="line"></div>
            </li>
            <li>
              <FaTwitter />
              <div className="line"></div>
            </li>
            <li>
              <FaPinterest />
              <div className="line"></div>
            </li>
            <li>
              <FaInstagram />
              <div className="line"></div>
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
