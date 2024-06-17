import React, { useEffect, useRef } from "react";
import { smoothScroll } from "../../utils/animations/smoothScroll";
import "./styles.css";
import gradient from "../../assets/images/gradient_hero.avif";

export default function Landing() {
  const imgRef = useRef(null);
  const titleContainer = useRef(null);

  const handleTitleClick = () => {
    titleContainer.current.classList.add("clicked");
  };

  useEffect(() => {
    const link = document.querySelector('a[href="#nav"]');
    link.addEventListener("click", (e) => smoothScroll(e, "#nav"));

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      link.removeEventListener("click", (e) => smoothScroll(e, "#nav"));
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPosition = -clientX / 110; // adjust the divisor to control the speed
      const yPosition = -clientY / 110; // adjust the divisor to control the speed
      imgRef.current.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="landingSection">
      <a href="#nav">
        <div className="landingImgContainer">
          <div
            ref={titleContainer}
            className="landingImgContainer__titleContainer"
          ></div>

          <h1
            className="landingImgContainer__titleContainer__title"
            onClick={handleTitleClick}
          >
            Boundless
          </h1>

          <div className="overlay"></div>
          <img src={gradient} ref={imgRef} alt="gradient landing" />
        </div>
      </a>
    </section>
  );
}
