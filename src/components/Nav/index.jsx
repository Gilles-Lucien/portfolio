import React, { useRef, useState } from "react";
import Button from "../Button";
import logo from "../../assets/images/logo_black.png";
import { NavLink, Link } from "react-router-dom";
import "../../utils/variables/fontStyles.css";
import "./styles.css";

export default function Nav() {
  const navMobileRef = useRef(null);
  const logoContainerRef = useRef(null);
  const navBarRef = useRef(null);

  const [isNavOpen, setIsNavOpen] = useState(false);

  // const handleLogoClick = () => {
  //   if (navBarRef.current && logoContainerRef.current) {
  //     const navWidth = navBarRef.current.offsetWidth;
  //     const navBarWidth = navBarRef.current.offsetWidth;
  //     navBarRef.current.style.transform = `translateX(${navBarWidth}px)`;
  //     logoContainerRef.current.style.transform = `translateX(${navWidth - 50}px)`;
  //   }
  // };

  const handleLogoClick = () => {
    if (isNavOpen) {
        setIsNavOpen(false);
        navMobileRef.current.removeAttribute("id");
        setTimeout(() => {
          if (navMobileRef.current) {
              navMobileRef.current.setAttribute("id", "navClose");
          }
      }, 300);
    } else {
        setIsNavOpen(true);
        navMobileRef.current.setAttribute("id", "navOpen");
    }
};

  return (
    <>
      <nav id="navDesktop">
        <div id="nav" className="navContainer">
          <Link className="navContainer__logoContainer" to="/">
            <img src={logo} alt="Logo" />
            <p id="navName">
              Lucien Peltier <strong className="fira-mono-bold">|</strong>
            </p>
            <p className="fira-mono-bold" id="navJob">
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
                <Button className="contactButton">Contact</Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="navMobile" >
        <div id="nav" ref={navMobileRef} className="mobileNavContainer">
          <div
            ref={logoContainerRef}
            className="mobileNavContainer__logoButton"
            onClick={handleLogoClick}
          >
            <img
              src={logo}
              alt="Logo"
              className="mobileNavContainer__logoButton--logo"
            />
          </div>
          <div className="mobileNavContainer__navBar" ref={navBarRef}>
            <Link className="mobileNavContainer__navBar__name" to="/">
              <p>
                Lucien Peltier <br />
                <strong className="fira-mono-bold">
                  UX/UI/Graphic designer
                  <br />& Front-end developer
                </strong>
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
                  <Button className="contactButton">Contact</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
