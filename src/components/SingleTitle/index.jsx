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
          <div>
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={
                  tag === "all" ? "" : tag === "graphic" ? "orangeSpan" : tag === "uxui" ? "blueSpan" : tag === "frontend" ? "yellowSpan" : ""
                }
              >
                {tag === "all" ? "" : tag === "graphic" ? "Graphic design" : tag === "uxui" ? "UX/UI" : tag === "frontend" ? "Front-end" : ""}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
