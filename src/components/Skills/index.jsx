import React from "react";
import "./styles.css";
import css3 from "../../assets/svg/css3.svg";
import html5 from "../../assets/svg/html-5.svg";
import javascript from "../../assets/svg/javascript.svg";
import typescript from "../../assets/svg/typescript.svg";
import sass from "../../assets/svg/sass-avatar.svg";
import git from "../../assets/svg/git.svg";
import github from "../../assets/svg/github.svg";
import vscode from "../../assets/svg/visual-studio.svg";
import react from "../../assets/svg/react.svg";

export default function Skills() {
  return (
    <section className="skillsSection">
      <div className="skillsSection__container">
        <h2>
          Coding skills <span>Languages and tools</span>
        </h2>
        <div className="skillsSection__container__skills">
          <div className="skillsSection__container__skills--skill">
            <h3>Languages & library</h3>
            <ul>
              <li>HTML5 <img src={html5} alt="HTML5" /></li>
              <li>CSS3 <img src={css3} alt="CSS3" /></li>
              <li>JavaScript <img src={javascript} alt="JavaScript" /></li>
              <li>React <img className="rotateAnimation" src={react} alt="React" /></li>
            </ul>
          </div>
          <div className="skillsSection__container__skills--skill">
            <h3>Superset<br/>& preprocessor</h3>
            <ul>
              <li>Typescript <img src={typescript} alt="TypeScript" /></li>
              <li>Sass <img src={sass} alt="Sass" /></li>
            </ul>
          </div>
          <div className="skillsSection__container__skills--skill">
            <h3>Tools</h3>
            <ul>
              <li>Git <img src={git} alt="Git" /></li>
              <li>Github <img src={github} alt="Github" /></li>
              <li>VSCode <img src={vscode} alt="Visual Studio Code" /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
