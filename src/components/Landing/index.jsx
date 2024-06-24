import React, { useEffect, useRef, useState } from "react";
import { smoothScroll } from "../../utils/animations/smoothScroll";
import "./styles.css";
import gradient from "../../assets/images/gradient_hero.avif";

export default function Landing() {
  const imgRef = useRef(null);
  const titleContainer = useRef(null);
  const title = useRef(null);
  const LandingLink = useRef(null);

  const [hrefValue, setHrefValue] = useState("#nav");

  const handleTitleClick = () => {
    titleContainer.current.classList.add("clickedContainer");
    title.current.classList.add("clickedTitle");
  };

  useEffect(() => {
    const link = LandingLink.current;
    if (link) {
      const handleClick = (e) => smoothScroll(e, hrefValue);
      link.addEventListener("click", handleClick);
  
      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        link.removeEventListener("click", handleClick);
      };
    }
  }, [hrefValue, LandingLink]);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 430) {
        setHrefValue("#mobileLandingAnchor");
      } else {
        setHrefValue("#nav");
      }
    };

    // Vérifier immédiatement en cas de rechargement de la page
    checkScreenSize();

    // Ajouter l'écouteur d'événement
    window.addEventListener("resize", checkScreenSize);

    // Cleanup function pour retirer l'écouteur
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPosition = -clientX / 10; // adjust the divisor to control the backgroung speed
      const yPosition = -clientY / 10; 
      imgRef.current.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
      
      // const titleXPosition = -clientX / 110; // adjust the divisor to control title the speed
      // const titleYPosition = -clientY / 110;

      // const xOffset = title.current.offsetWidth/2.25;
      // const yOffset = title.current.offsetHeight/2.25;
      // title.current.style.transform = `translate(${
      //   titleXPosition - xOffset
      // }px, ${titleYPosition - yOffset}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="landingSection">
      <a href={hrefValue} ref={LandingLink}>
        <div className="landingImgContainer">
          <div
            ref={titleContainer}
            className="landingImgContainer__titleContainer"
            onClick={handleTitleClick}
          ></div>
          <h1 ref={title} className="landingImgContainer__titleContainer__title">
            Bound<span>less</span>
          </h1>

          <div className="overlay"></div>
          <img src={gradient} ref={imgRef} alt="gradient landing" />
        </div>
      </a>
    </section>
  );
}
