import React from "react";
import "./styles.css";


export default function SingleTitle(project) {
console.log("project:", project);

  return (
    <section className="singleTitle">
      <div className="singleTitle__container">
        <div className="singleTitle____container__txt">
          <h1>
            {project.title}
            <span>.</span>
          </h1>
          <p>{project.description}</p>
        </div>
      </div>
    </section>
  );
}
