import React from "react";
import Button from "../Button";
import logo from "../../assets/images/logo_black.png";
import { Link } from "react-router-dom";
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
            <Link to="/projects" className="link">
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link to="/aboutme" className="link">
              <p>About me</p>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Button
                className="contactButton"
                onClick={() => console.log("clicked")}
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
