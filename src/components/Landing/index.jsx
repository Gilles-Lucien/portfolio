import React, { useEffect, useRef, useState } from "react";
import { smoothScroll } from "../../utils/animations/smoothScroll";
import "./styles.css";
import gradient from "../../assets/images/gradient_hero.avif";
import redo from "../../assets/svg/redo.svg";

export default function Landing() {
  const imgRef = useRef(null);
  const titleContainer = useRef(null);
  const title = useRef(null);
  const LandingLink = useRef(null);
  const overlayRef = useRef(null);
  const LandingSection = useRef(null);
  const redoRef = useRef(null);
  const transitionMaskRef = useRef(null);

  let [hrefValue, setHrefValue] = useState("#nav");

  const handleTitleClick = () => {

    const redoElement = redoRef.current;
    if (redoElement.style.display === "block") {
      return;
    }

    titleContainer.current.classList.add("clickedContainer");
    title.current.classList.add("clickedTitle");
    overlayRef.current.classList.add("clickedOverlay");
    overlayRef.current.classList.remove("overlay");

    setTimeout(() => {
      setHrefValue("#");
    }, 500);

    setTimeout(() => {
      redoRef.current.style.display = "block";
    }, 3100);
  };

  const handleRedoClick = (event) => {
    event.stopPropagation(event);
    setHrefValue("#nav");
    transitionMaskRef.current.style.display = "block";
    transitionMaskRef.current.classList.add("transitionMask--animation");

    setTimeout(() => {
      titleContainer.current.classList.remove("clickedContainer");
      title.current.classList.remove("clickedTitle");
      overlayRef.current.classList.remove("clickedOverlay");
      overlayRef.current.classList.add("overlay");
      redoRef.current.style.display = "none";
    }, 500);

    setTimeout(() => {
      transitionMaskRef.current.classList.remove("transitionMask--animation");
      transitionMaskRef.current.style.display = "none";
    }, 1000);
  };

  // useEffect pour le smooth scroll
  useEffect(() => {
    const link = LandingLink.current;
    if (link) {
      const handleClick = (e) => smoothScroll(e, hrefValue);
      link.addEventListener("click", handleClick);

      return () => {
        link.removeEventListener("click", handleClick);
      };
    }
  }, [hrefValue, LandingLink]);

  // useEffect pour le changement de href en fonction de la taille de l'écran
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setHrefValue("#mobileLandingAnchor");
      } else {
        setHrefValue("#nav");
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // useEffect pour centrer l'overlay
  useEffect(() => {
    // Centrer l'overlay au chargement
    const centerOverlay = () => {
      const overlayWidth = overlayRef.current.offsetWidth;
      const overlayHeight = overlayRef.current.offsetHeight;

      const xPositionOverlay = window.innerWidth / 2 - overlayWidth / 2;
      let yPositionOverlay = window.innerHeight / 2 - overlayHeight / 2;

      // Si la largeur de l'écran est supérieure à 768px, ajuster la position Y
      if (window.innerWidth > 768) {
        yPositionOverlay -= 63; // Décaler l'overlay de 63px vers le haut
      } else {
        yPositionOverlay -= 0; // Décaler l'overlay de 50px vers le haut
      }

      overlayRef.current.style.left = `${xPositionOverlay}px`;
      overlayRef.current.style.top = `${yPositionOverlay}px`;
    };

    centerOverlay();

    // Ajouter l'écouteur d'événement pour le redimensionnement
    window.addEventListener("resize", centerOverlay);

    return () => {
      window.removeEventListener("resize", centerOverlay);
    };
  }, []);

  // useEffect pour le parallax et le tracking du curseur pour l'overlay
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Parallax effect
      const { clientX, clientY } = e;
      const xPosition = -clientX / 10; // adjust the divisor to control the backgroung speed
      const yPosition = -clientY / 10;
      imgRef.current.style.transform = `translate(${xPosition}px, ${yPosition}px)`;

      /// Overlay effect
      const overlayWidth = overlayRef.current.offsetWidth;
      const overlayHeight = overlayRef.current.offsetHeight;

      const xPositionOverlay = e.clientX - overlayWidth / 2;
      const yPositionOverlay = e.clientY - overlayHeight / 2;

      overlayRef.current.style.left = `${xPositionOverlay}px`;
      overlayRef.current.style.top = `${yPositionOverlay}px`;
    };

    if (window.innerWidth > 768) {
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);


  return (
    <section className="landingSection" ref={LandingSection}>
      <div
        className="transitionMask"
        ref={transitionMaskRef}
        style={{ display: "none" }}
      ></div>
      <img
        src={redo}
        alt="redo"
        id="redo"
        ref={redoRef}
        style={{ display: "none" }}
        onClick={handleRedoClick}
      />

      <a href={hrefValue} ref={LandingLink}>
        <div className="landingImgContainer">
          <div
            ref={titleContainer}
            className="landingImgContainer__titleContainer"
            onClick={handleTitleClick}
          ></div>
          <h1
            ref={title}
            className="landingImgContainer__titleContainer__title"
          >
            Bound<span>less</span>
          </h1>

          <div className="overlay" ref={overlayRef}></div>
          <img src={gradient} ref={imgRef} alt="gradient landing" />
        </div>
      </a>
    </section>
  );
}
