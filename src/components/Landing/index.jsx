import React, { useEffect, useRef } from "react";
import { smoothScroll } from "../../utils/animations/smoothScroll";
import "./styles.css";
import gradient from "../../assets/images/gradient_hero.avif";

export default function Landing() {
  const imgRef = useRef(null);
  const titleContainer = useRef(null);
  const title = useRef(null);

  const handleTitleClick = () => {
    titleContainer.current.classList.add("clickedContainer");
    title.current.classList.add("clickedTitle");
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
      const xPosition = -clientX / 110; // adjust the divisor to control the backgroung speed
      const yPosition = -clientY / 110; 
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
      <a href="#nav">
        <div className="landingImgContainer">
          <div
            ref={titleContainer}
            className="landingImgContainer__titleContainer"
            onClick={handleTitleClick}
          ></div>
          <h1 ref={title} className="landingImgContainer__titleContainer__title">
            Boundless
          </h1>

          <div className="overlay"></div>
          <img src={gradient} ref={imgRef} alt="gradient landing" />
        </div>
      </a>
    </section>
  );
}
