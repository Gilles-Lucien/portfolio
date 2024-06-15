import React from "react";
import "./styles.css";
import gradient from "../../assets/images/gradient_hero.avif";

export default function Landing() {
  return (
    <section className="landingSection">
      <div className="landingImgContainer">
        <img src={gradient} alt="gradient landing" />
      </div>
    </section>
  );
}
