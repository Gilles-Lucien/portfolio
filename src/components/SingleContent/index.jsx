import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";

/// import et map des images sans backend

export default function SingleContent(project) {
  console.log("project:", project);
  const projectNumber = useParams().id;
  const imageMap = {};

  for (let i = 0; i <= project.imageNumber - 1; i++) {
    const key = `img${i + 1}`;
    imageMap[key] = require(`../../assets/projects/project${projectNumber}/img${
      i + 1
    }.webp`);
  }
  console.log("imageMap:", imageMap);

  return (
    <section className="singleContent">
      <div className="singleContent__container">
        <img
          src={imageMap.img1}
          alt={project.title + project.id + imageMap.img1}
        />
        <div className="singleContent__container__txt--section1">
          <h2>
            {project.section1.title}
            <span className="blueSpan">{project.section1.subtitle}</span>
          </h2>
          <p className="twoColumns">{project.section1.description}</p>
        </div>
        <img
          src={imageMap.img2}
          alt={project.title + project.id + imageMap.img2}
        />
        <div className="displayRow">
          <div className="singleContent__container__txt--section2">
            <h2>
              {project.section2.title}
              <span className="blueSpan">{project.section2.subtitle}</span>
            </h2>
            <p>{project.section2.description}</p>
          </div>
          <img
            src={imageMap.img3}
            alt={project.title + project.id + imageMap.img3}
          />
        </div>
        <div className="singleContent__container__gallery">
          {Array.from({ length: project.imageNumber - 3 }, (_, index) => (
            <img
              key={index}
              src={imageMap[`img${index + 4}`]} // Commence à img4 car vous soustrayez 3
              alt={`${project.title}${project.id}${
                imageMap[`img${index + 4}`]
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
