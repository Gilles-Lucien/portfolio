import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import graphic from "../../assets/images/category_graphic.png";
import uxui from "../../assets/images/category_uxui.png";
import frontend from "../../assets/images/category_frontend.png";

export default function ProjectsSection() {
  return (
    <section className="projectsSection">
      <div className="projectsSection__container">
        <h2>
          Projects <span>by category</span>
        </h2>
        <div className="projectsSection__container__categories">
          <div className="projectsSection__container__categories__category">
            <Link
              className="projectsSection__container__categories__category-graphic"
              to="/projects:graphic"
            >
              <img src={graphic} alt="an open book" />
              <p>Graphic design</p>
            </Link>
          </div>
          <div className="projectsSection__container__categories__category">
            <Link
              className="projectsSection__container__categories__category-uxui"
              to="/projects:uxui"
            >
              <img src={uxui} alt="a flowchart" />
              <p>UX/UI</p>
            </Link>
          </div>
          <div className="projectsSection__container__categories__category">
            <Link
              className="projectsSection__container__categories__category-frontend"
              to="/projects:frontend"
            >
              <img src={frontend} alt="lines of code" />
              <p>Front-end</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
