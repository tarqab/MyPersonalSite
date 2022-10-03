import React, { useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setToggle] = useState(false);
  const toggleHandle = () => setToggle((click) => !click);

  return (
    <div className="navbar">
      <div>
        <img
          src={require("../assets/Web Developer-1.png")}
          alt="logo"
          style={{ width: "120px" }}
        ></img>
      </div>
      <div className="absolute right-4">
        <ul className="list-browser">
          <li className="li-list-pc">
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="li-list-pc">
            {" "}
            <Link to="about" spy={true} smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="li-list-pc">
            {" "}
            <Link to="skills" spy={true} smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="li-list-pc">
            {" "}
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* hamburger */}
      <div className="hamburger" onClick={toggleHandle}>
        {!click ? <FaBars /> : <FaTimes />}
      </div>
      {/* list for mobile */}
      <div>
        <ul className={!click ? "hidden" : "ul-list-mobile"}>
          <li className="li-list-moblie">
            <Link
              onClick={toggleHandle}
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="li-list-moblie">
            <Link
              onClick={toggleHandle}
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="li-list-moblie">
            <Link
              onClick={toggleHandle}
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="li-list-moblie">
            <Link
              onClick={toggleHandle}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Social media icons */}
      <div className="social">
        <ul>
          <li className="linkedIn">
            <a
              className="linkedInLink"
              href="https://www.linkedin.com/in/tareq-gharibeh-b02526250/"
            >
              Linkedin <FaLinkedin size={45} className="ml-2" />
            </a>
          </li>
          <li className="GitHub">
            <a className="GitHubLink" href="https://github.com/tarqab">
              GitHub <FaGithub size={45} className="ml-4" />
            </a>
          </li>
          <li className="Email">
            <a className="EmailLink" href="mailto:tareq.ab.b7@gmail.com">
              Email <MdOutlineAlternateEmail size={45} className="ml-4" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
