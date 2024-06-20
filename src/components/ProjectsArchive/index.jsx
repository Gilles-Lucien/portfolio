import React, { useEffect, useState } from "react";
import "./styles.css";
import Filter from "../Filter";
import fetchProjectCards from "../../utils/api/api";
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
import pictureCard8 from "../../assets/cards_pictures/pictureCard-8.jpg";

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
};

export default function ProjectsArchive() {
  const filters = [
    { id: "All", class: "filter--all", name: "All" },
    { id: "Graphic", class: "filter--graphic", name: "Graphic" },
    { id: "UX/UI", class: "filter--uxui", name: "UX/UI" },
    { id: "Front-end", class: "filter--frontend", name: "Front-end" },
  ];

  const [activeFilters, setActiveFilters] = useState(["All"]);

  const handleFilterClick = (filterId) => {
    setActiveFilters((prevFilters) => {
      let newFilters;
      if (filterId === "All") {
        newFilters = ["All"];
      } else if (prevFilters.includes("All")) {
        newFilters = [filterId];
      } else if (prevFilters.includes(filterId)) {
        newFilters = prevFilters.filter((id) => id !== filterId);
      } else {
        newFilters = [...prevFilters, filterId];
      }

      // Si aucun filtre n'est actif, activez le filtre "All"
      if (newFilters.length === 0) {
        newFilters = ["All"];
      }

      return newFilters;
    });
  };

  const [projectCards, setProjectCards] = useState([]);

  const filteredProjectCards = projectCards.filter((card) => {
    // Si "All" est actif, toutes les cartes sont affichées
    if (activeFilters.includes("All")) {
      return true;
    }
    // Sinon, une carte est affichée si l'un de ses tags correspond à l'un des filtres actifs
    return card.tags.some((tag) => activeFilters.includes(tag));
  });

  

  useEffect(() => {
    fetchProjectCards().then((response) => {
      const updatedProjectCards = response.projectCards.map((card) => ({
        ...card,
        image: imageMap[card.image],
      }));
      setProjectCards(updatedProjectCards);
      console.log(updatedProjectCards);
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
        <div className="projectsArchive__container__cards">
          {filteredProjectCards.map((card) => (
            <ProjectCard key={card.id} {...card} />
          ))}
        </div>
        <PageCounter currentPage={1} totalPage={5} />
      </div>
    </section>
  );
}
