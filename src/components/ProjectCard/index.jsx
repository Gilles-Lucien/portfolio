import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import arrowRight from "../../assets/svg/arrow_right.svg";

export default function ProjectCard({ title, description, tags, image, link }) {
  return (
    <Link to={link} className="projectCard">
      <div className="projectCard__content">
        <div className="projectCard__content__titleAndTagsContainer">
          <div>
            <h3 className="projectCard__content__titleAndTagsContainer--title">
              {title}
            </h3>
            <div className="projectCard__content__titleAndTagsContainer__tags">
              {tags.map((tag) => {
                if (tag === "all") {
                  return null;
                }

                return (
                  <span
                    key={tag}
                    className={`projectCard__content__titleAndTagsContainer__tags--tag${
                      tag === "graphic" ? " orangeSpan" : ""
                    }${tag === "uxui" ? " blueSpan" : ""}${
                      tag === "frontend" ? " yellowSpan" : ""
                    }`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
          <img
            className="projectCard__content__titleAndTagsContainer__arrow"
            src={arrowRight}
            alt="arrow right"
          />
        </div>
        <p className="projectCard__description">{description}</p>
      </div>
      <img className="projectCard__image" src={image} alt={title} />
    </Link>
  );
}
