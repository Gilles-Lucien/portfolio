import React, { useEffect, useState } from "react";
import "./styles.css";
import Filter from "../Filter";
import fetchProjectCards from "../../utils/api/api";
import ProjectCard from "../ProjectCard";

/// import temporaire des images
import pictureCard0 from "../../assets/cards_pictures/pictureCard-0.png";
import pictureCard1 from "../../assets/cards_pictures/pictureCard-1.png";
import pictureCard2 from "../../assets/cards_pictures/pictureCard-2.png";
import pictureCard3 from "../../assets/cards_pictures/pictureCard-3.png";
import pictureCard4 from "../../assets/cards_pictures/pictureCard-4.png";
import pictureCard5 from "../../assets/cards_pictures/pictureCard-5.png";
import pictureCard6 from "../../assets/cards_pictures/pictureCard-6.png";
import pictureCard7 from "../../assets/cards_pictures/pictureCard-7.png";

const imageMap = {
  pictureCard0: pictureCard0,
  pictureCard1: pictureCard1,
  pictureCard2: pictureCard2,
  pictureCard3: pictureCard3,
  pictureCard4: pictureCard4,
  pictureCard5: pictureCard5,
  pictureCard6: pictureCard6,
  pictureCard7: pictureCard7,
};

export default function ProjectsArchive() {
  const filters = [
    { id: "All", class: "filter--all", name: "All" },
    { id: "Graphic", class: "filter--graphic", name: "Graphic" },
    { id: "UX/UI", class: "filter--uxui", name: "UX/UI" },
    { id: "Front-end", class: "filter--frontend", name: "Front-end" },
  ];

  const [projectCards, setProjectCards] = useState([]);

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
            <Filter key={filter.id} className={filter.class} id={filter.id}>
              {filter.name}
            </Filter>
          ))}
        </div>
        <div className="projectsArchive__container__cards">
          {projectCards.map((card) => (
            <ProjectCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              tags={card.tags}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
