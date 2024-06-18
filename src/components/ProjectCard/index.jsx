import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import arrowRight from "../../assets/svg/arrow_right.svg";

export default function ProjectCard({ title, description, tags, image, link }) {
  return (
    <Link to={link} className="projectCard">
      <div className="projectCard__content">
        <div className="projectCard__content__titleAndTagsContainer">
          <h3 className="projectCard__content__titleAndTagsContainer--title">
            {title} 
          </h3>
          <div className="projectCard__content__titleAndTagsContainer__tags">
            {tags.map((tag) => (
              <span
                key={tag}
                className="projectCard__content__titleAndTagsContainer__tags--tag"
              >
                {tag}
              </span>
            ))}
          </div>
          <img className="projectCard__content__titleAndTagsContainer__arrow" src={arrowRight} alt="arrow right" />
        </div>
        <p className="projectCard__description">{description}</p>
      </div>
      <img className="projectCard__image" src={image} alt={title} />
    </Link>
  );
}
