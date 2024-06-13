import React from "react";
import logo from "../../assets/images/logo_black.png";
import { Link, NavLink } from "react-router-dom";
import "../../utils/variables/fontStyles.css";
import "./styles.css";
import github from "../../assets/svg/github.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import behance from "../../assets/svg/behance.svg";
import Button from "../Button";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerContainer__logoContainer">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div>
            <p>Lucien Peltier</p>
            <p className="fira-mono-bold">
              UX/UI/Graphic designer
              <br />& Front-end developer
            </p>
            <div className="footerContainer__logoContainer__socialContainer">
              <a
                href="https://github.com/Gilles-Lucien"
                target="_blank"
                rel="noreferrer"
              >
                <img className="iconRs" src={github} alt="Github link" />
              </a>
              <a
                href="https://www.linkedin.com/in/gillespeltier/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="iconRs" src={linkedin} alt="linkedin link" />
              </a>
              <a
                href="https://www.behance.net/gpeltier"
                target="_blank"
                rel="noreferrer"
              >
                <img className="iconRs" src={behance} alt="behance link" />
              </a>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <NavLink to="/projects" className="navLink">
              <p>Projects</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutme" className="navLink">
              <p>About me</p>
            </NavLink>
          </li>
          <li>
            <Link to="/contact">
            <Button
                className="contactButton"
              >
                Contact
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
