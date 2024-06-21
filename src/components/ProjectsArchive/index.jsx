import React, { useEffect, useState } from "react";
import "./styles.css";
import Filter from "../Filter";
import { fetchProjectCards } from "../../utils/api/api";
import ProjectCard from "../ProjectCard";
import PageCounter from "../PageCounter";

/// import temporaire des images
import pictureCard0 from "../../assets/cards_pictures/pictureCard-0.png";
import pictureCard1 from "../../assets/cards_pictures/pictureCard-1.png";
import pictureCard2 from "../../assets/cards_pictures/pictureCard-2.png";
import pictureCard3 from "../../assets/cards_pictures/pictureCard-3.png";
import pictureCard4 from "../../assets/cards_pictures/pictureCard-4.png";
import pictureCard5 from "../../assets/cards_pictures/pictureCard-5.png";
import pictureCard6 from "../../assets/cards_pictures/pictureCard-6.png";
import pictureCard7 from "../../assets/cards_pictures/pictureCard-7.png";
import pictureCard8 from "../../assets/cards_pictures/pictureCard-8.png";
import pictureCard9 from "../../assets/cards_pictures/pictureCard-9.png";
import pictureCard10 from "../../assets/cards_pictures/pictureCard-10.png";
import pictureCard11 from "../../assets/cards_pictures/pictureCard-11.png";
import pictureCard12 from "../../assets/cards_pictures/pictureCard-12.png";
import pictureCard13 from "../../assets/cards_pictures/pictureCard-13.png";
import pictureCard14 from "../../assets/cards_pictures/pictureCard-14.png";
import pictureCard15 from "../../assets/cards_pictures/pictureCard-15.png";
import pictureCard16 from "../../assets/cards_pictures/pictureCard-16.png";
import pictureCard17 from "../../assets/cards_pictures/pictureCard-17.png";
import pictureCard18 from "../../assets/cards_pictures/pictureCard-18.png";
import pictureCard19 from "../../assets/cards_pictures/pictureCard-19.png";
import pictureCard20 from "../../assets/cards_pictures/pictureCard-20.png";
import pictureCard21 from "../../assets/cards_pictures/pictureCard-21.png";
import pictureCard22 from "../../assets/cards_pictures/pictureCard-22.png";
import pictureCard23 from "../../assets/cards_pictures/pictureCard-23.png";
import pictureCard24 from "../../assets/cards_pictures/pictureCard-24.png";
import pictureCard25 from "../../assets/cards_pictures/pictureCard-25.png";
import pictureCard26 from "../../assets/cards_pictures/pictureCard-26.png";

/// map des images dans un objet, temporaire
const imageMap = {
  pictureCard0: pictureCard0,
  pictureCard1: pictureCard1,
  pictureCard2: pictureCard2,
  pictureCard3: pictureCard3,
  pictureCard4: pictureCard4,
  pictureCard5: pictureCard5,
  pictureCard6: pictureCard6,
  pictureCard7: pictureCard7,
  pictureCard8: pictureCard8,
  pictureCard9: pictureCard9,
  pictureCard10: pictureCard10,
  pictureCard11: pictureCard11,
  pictureCard12: pictureCard12,
  pictureCard13: pictureCard13,
  pictureCard14: pictureCard14,
  pictureCard15: pictureCard15,
  pictureCard16: pictureCard16,
  pictureCard17: pictureCard17,
  pictureCard18: pictureCard18,
  pictureCard19: pictureCard19,
  pictureCard20: pictureCard20,
  pictureCard21: pictureCard21,
  pictureCard22: pictureCard22,
  pictureCard23: pictureCard23,
  pictureCard24: pictureCard24,
  pictureCard25: pictureCard25,
  pictureCard26: pictureCard26,
};

export default function ProjectsArchive({ filterId }) {
  const filters = [
    { id: "all", class: "filter--all", name: "All" },
    { id: "graphic", class: "filter--graphic", name: "Graphic" },
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
