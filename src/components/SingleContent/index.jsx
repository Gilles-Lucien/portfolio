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
        <div className="singleContent__container__txt">
          <p>{project.description}</p>
        </div>
      </div>
    </section>
  );
}
