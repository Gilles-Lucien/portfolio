import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import arrowRight from "../../assets/svg/arrow_right.svg";

export default function SingleTitle(project) {
  console.log("project:", project);

  return (
    <section className="singleTitle">
      <div className="singleTitle__container">
        <div className="singleTitle__container__txt">
          <Link to="/projects" className="singleTitle__container__txt--back">
          <img
            className="singleTitle__container__txt--arrow"
            src={arrowRight}
            alt="arrow left"
          />
          </Link>
          <h1>
            {project.title}
            <span>.</span>
          </h1>
          <p>{project.description}</p>
          <div className="singleTitle__container__txt--tags">
            {project.tags
              .filter((tag) => tag !== "all")
              .map((tag, index) => (
                <span
                  key={index}
                  className={
                    tag === "graphic"
                      ? "orangeSpan"
                      : tag === "uxui"
                      ? "blueSpan"
                      : tag === "frontend"
                      ? "yellowSpan"
                      : ""
                  }
                >
                  {tag === "graphic"
                    ? "Graphic design"
                    : tag === "uxui"
                    ? "UX/UI"
                    : tag === "frontend"
                    ? "Front-end"
                    : ""}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
