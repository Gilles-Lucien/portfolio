import React from "react";
import "./styles.css";
import Filter from "../Filter";

export default function ProjectsArchive() {
  const filters = [
    { id:"all", class: 'filter--all', name: 'All' },
    { id:"graphic", class: 'filter--graphic', name: 'Graphic' },
    { id:"uxui", class: 'filter--uxui', name: 'UX/UI' },
    { id:"frontend", class: 'filter--frontend', name: 'Front-end' },
  ];

  return (
    <section className="projectsArchive">
      <div className="projectsArchive__container">
        {filters.map(filter => (
          <Filter key={filter.id} className={filter.class} id={filter.id}>
            {filter.name}
          </Filter>
        ))}
      </div>
    </section>
  );
}
