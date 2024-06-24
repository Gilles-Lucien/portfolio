import React from "react";
import "./styles.css";
import hero_picture from "../../assets/images/hero_picture.png";

export default function Hero() {

  return (
    <section className="hero" id="mobileLandingAnchor">
      <div className="hero__container">
        <div className="hero____container__txt">
          <h1>
            Hello world<span>!</span>
          </h1>
          <p>
            I’m Lucien, senior &#123;
            <span className="blueSpan">UX/UI & Graphic</span>&#125; designer,
            and junior &#123;<span className="blueSpan">front-end</span>&#125;
            developer. I have 10 years experience in user interface design, and
            have extended my skills to front-end coding. I can help you build
            fine digital products from UX design to prototyping and front-end
            coding, especially with the powerful{" "}
            <span className="blueSpan">React</span> library.
          </p>
        </div>
        <img
        className="hero__container__picture"
        src={hero_picture}
        alt="Myself outside, wearing a cap, during a hike in the mountains"
      />
      </div>
    </section>
  );
}
