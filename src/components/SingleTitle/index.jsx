import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Button from "../Button";

import arrowRight from "../../assets/svg/arrow_right.svg";
import github from "../../assets/svg/github.svg";
import figma from "../../assets/svg/figma.svg";

export default function SingleTitle(project) {
  console.log(project);
  const hasLinks = project.figma || project.gitPages || project.repository;

  return (
    <section className="singleTitle">
      <div
        className="singleTitle__container"
        style={{ gap: hasLinks ? "0px" : undefined }}
      >
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
          <p style={{ width: hasLinks ? "90%" : undefined }}>
            {project.description}
          </p>
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
        <div
          className="singleTitle__container__projectLinks"
          style={{ display: hasLinks ? "flex" : "none" }}
        >
          {project.figma && (
            <a href={project.figma} target="_blank" rel="noreferrer">
              <Button className="projectLinks--figma">
                Figma
                <img src={figma} alt="figma logo" />
              </Button>
            </a>
          )}
          {project.repository && (
            <a href={project.repository} target="_blank" rel="noreferrer">
              <Button className="projectLinks--github">
                Github
                <img src={github} alt="github logo" />
              </Button>
            </a>
          )}
          {project.gitPages && (
            <a href={project.gitPages} target="_blank" rel="noreferrer">
              <Button className="projectLinks--githubPages">
                Github Pages
                <img src={github} alt="github logo" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
