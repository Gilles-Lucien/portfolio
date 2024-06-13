import React from "react";
import Button from "../Button";
import logo from "../../assets/images/logo_black.png";
import { NavLink, Link } from "react-router-dom";
import "../../utils/variables/fontStyles.css";
import "./styles.css";

export default function Nav() {
  return (
    <nav>
      <div className="navContainer">
        <Link className="navContainer__logoContainer" to="/">
          <img src={logo} alt="Logo" />
          <p>
            Lucien Peltier <strong className="fira-mono-bold">|</strong>
          </p>
          <p className="fira-mono-bold">
            UX/UI/Graphic designer
            <br />& Front-end developer
          </p>
        </Link>
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
    </nav>
  );
}
