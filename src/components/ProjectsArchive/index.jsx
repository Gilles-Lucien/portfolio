import React, { useEffect, useState } from "react";
import "./styles.css";
import Filter from "../Filter";
import { fetchProjectCards } from "../../utils/api/api";
import ProjectCard from "../ProjectCard";
import PageCounter from "../PageCounter";

/// import et map des images sans backend
const imageMap = {};

for (let i = 0; i <= 26; i++) {
  const key = `pictureCard${i}`;
  imageMap[key] = require(`../../assets/cards_pictures/pictureCard-${i}.avif`);
}

export default function ProjectsArchive({ filterId }) {
  const filters = [
    { id: "all", class: "filter--all", name: "All" },
    { id: "graphic", class: "filter--graphic", name: "Graphic design" },
    { id: "uxui", class: "filter--uxui", name: "UX/UI" },
    { id: "frontend", class: "filter--frontend", name: "Front-end" },
  ];

  const [activeFilters, setActiveFilters] = useState([
    filterId ? filterId : "all",
  ]);
  const [projectCards, setProjectCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleFilterClick = (filterId) => {
    setActiveFilters((prevFilters) => {
      // If "All" is clicked and it's already active, ignore the click
      if (filterId === "all" && prevFilters.includes("all")) {
        return prevFilters;
      }

      if (filterId === "all") {
        return prevFilters.length === 0 || prevFilters.includes("all")
          ? []
          : ["all"];
      }

      const newFilters = prevFilters.includes(filterId)
        ? prevFilters.filter((id) => id !== filterId)
        : [...prevFilters, filterId];

      // If no filters are selected, select "All"
      if (newFilters.length === 0) {
        return ["all"];
      }

      // If filters other than "All" are selected, remove "All"
      return newFilters.filter((id) => id !== "all");
    });
    // Go back to the first page whenever a filter is changed
    setCurrentPage(1);
  };

  const filteredProjectCards = projectCards.filter((card) => {
    if (activeFilters.length === 0) {
      return true;
    }
    return card.tags.some((tag) => activeFilters.includes(tag));
  });

  const totalPage = Math.ceil(filteredProjectCards.length / itemsPerPage);

  const next = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPage));
  };

  const previous = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = filteredProjectCards.slice(startIndex, endIndex);

  useEffect(() => {
    fetchProjectCards().then((response) => {
      const updatedProjectCards = response.projectCards.map((card) => ({
        ...card,
        image: imageMap[card.image],
      }));
      setProjectCards(updatedProjectCards);
    });
  }, []);

  return (
    <section className="projectsArchive">
      <div className="projectsArchive__container">
        <div className="projectsArchive__container__filters">
          {filters.map((filter) => (
            <Filter
              key={filter.id}
              className={filter.class}
              id={filter.id}
              onClick={() => handleFilterClick(filter.id)}
              isActive={activeFilters.includes(filter.id)}
            >
              {filter.name}
            </Filter>
          ))}
        </div>
        <PageCounter
          currentPage={currentPage}
          totalPage={totalPage}
          next={next}
          previous={previous}
        />
        <div className="projectsArchive__container__cards">
          {currentCards.map((card) => (
            <ProjectCard key={card.id} {...card} />
          ))}
        </div>
        <PageCounter
          currentPage={currentPage}
          totalPage={totalPage}
          next={next}
          previous={previous}
        />
      </div>
    </section>
  );
}
