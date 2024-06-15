import React, { useState } from "react";
import "./styles.css";
import aboutMe1 from "../../assets/images/aboutMe1.png";
import aboutMe2 from "../../assets/images/aboutMe2.png";
import aboutMe3 from "../../assets/images/aboutMe3.png";
import aboutMe4 from "../../assets/images/aboutMe4.png";

export default function AboutMeContent() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showimg1Tooltip, setShowimg1Tooltip] = useState(false);
  const [showimg2Tooltip, setShowimg2Tooltip] = useState(false);
  const [showimg3Tooltip, setShowimg3Tooltip] = useState(false);
  const [showimg4Tooltip, setShowimg4Tooltip] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX + 20, y: e.clientY + 20 });
  };

  return (
    <section className="AboutMeContent">
      <div className="AboutMeContent__container">
        <div className="AboutMeContent____container__txt">
          <h1>
            Who am I<span>?</span>
          </h1>
          <p>
            Hi, I’m Lucien, a senior &#123;
            <span className="blueSpan">UX/UI and graphic</span>&#125; designer,
            with additional expertise as a junior &#123;
            <span className="blueSpan">front-end</span>&#125; developer. <br />
            <br /> I have honed my design skills through my studies in Paris and
            enriched my professional experience by working in France and Canada,
            specifically in vibrant Montreal. This{" "}
            <span className="blueSpan">international exposure</span> has
            equipped me with a versatile approach to design, blending diverse
            cultural aesthetics and technical insights.
          </p>
        </div>
        <img
          id="img1"
          onMouseEnter={() => setShowimg1Tooltip(true)}
          onMouseLeave={() => setShowimg1Tooltip(false)}
          onMouseMove={handleMouseMove}
          className="AboutMeContent__container__picture"
          src={aboutMe1}
          alt="Myself at Brussels. It does not show much but I am sick with a high fever. Only people who read alt attributes will know. It's a secret between you and me."
        />
        {showimg1Tooltip && (
          <div
            className="toolTip--about1"
            style={{
              position: "fixed",
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
            }}
          >
            In Brussels on the Grand Place.
          </div>
        )}
      </div>
      <div className="AboutMeContent__container">
        <img
          id="img2"
          onMouseEnter={() => setShowimg2Tooltip(true)}
          onMouseLeave={() => setShowimg2Tooltip(false)}
          onMouseMove={handleMouseMove}
          className="AboutMeContent__container__picture"
          src={aboutMe2}
          alt="Myself squating in front of a firecamp. Here I'm sorounded by longtime friends off-camera. I love them. They are part of what make me who I am today."
        />
        {showimg2Tooltip && (
          <div
            className="toolTip--about2"
            style={{
              position: "fixed",
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
            }}
          >
            Crouching in front of a fire camp. Here, I'm surrounded, off-camera,
            by old friends. I love them. They are part of what makes me who I am
            today.
          </div>
        )}
        <div className="AboutMeContent____container__txt">
          <h2>
            Design Expertise{" "}
            <span className="orangeSpan">and Personal Commitment</span>
          </h2>
          <p>
            With a decade of experience in creating{" "}
            <span className="orangeSpan">intuitive</span> and{" "}
            <span className="orangeSpan">visually appealing</span> user
            interfaces, I specialize in translating complex ideas into engaging
            and user-friendly designs. My{" "}
            <span className="orangeSpan">graphic design background</span>{" "}
            complements my UX/UI expertise, ensuring that every project I
            undertake is both functional and visually stunning.
            <br />
            <br />
            In addition to my design career, I am a{" "}
            <span className="orangeSpan">volunteer firefighter</span>. This role
            has ingrained in me a strong sense of{" "}
            <span className="orangeSpan">
              discipline, teamwork, and resilience
            </span>{" "}
            — qualities that I bring to every project I work on.
          </p>
        </div>
      </div>
      <div className="AboutMeContent__container">
        <div className="AboutMeContent____container__txt">
          <h2>
            Continuous Growth{" "}
            <span className="greenSpan"> and Technical Integration</span>
          </h2>
          <p>
            As a designer, I am driven by{" "}
            <span className="greenSpan">curiosity</span> and a passion for{" "}
            <span className="greenSpan">continuous learning</span>. I thrive on
            exploring new design trends and technologies, always seeking ways to
            enhance my skills and deliver cutting-edge solutions. My approach to
            design is a balanced blend of{" "}
            <span className="greenSpan">creativity and precision</span>,
            ensuring that every detail is meticulously crafted. <br />
            <br />
            Currently, I am expanding my capabilities in{" "}
            <span className="greenSpan">front-end development</span>, aiming to
            bridge the gap between design and implementation. This{" "}
            <span className="greenSpan">dual skill set</span> allows me to
            collaborate effectively with developers and ensures that my designs
            are not only beautiful but also technically feasible.
          </p>
        </div>
        <img
          id="img3"
          onMouseEnter={() => setShowimg3Tooltip(true)}
          onMouseLeave={() => setShowimg3Tooltip(false)}
          onMouseMove={handleMouseMove}
          className="AboutMeContent__container__picture"
          src={aboutMe3}
          alt="Myself on a pier at San Francisco, holding a crab we just fished. Our friends who hosted us took us to the port to fish crabs. We kept none because they were too small, and to be honnest I don't trust San Francisco's port water quality"
        />
        {showimg3Tooltip && (
          <div
            className="toolTip--about3"
            style={{
              position: "fixed",
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
            }}
          >
            On a pier in San Francisco, holding a crab we'd just caught.
            The friends who had invited us took us to the harbour to fish for crabs.
            Rest assured, we didn't keep any and put them back in the
            water.
          </div>
        )}
      </div>
      <div className="AboutMeContent__container lastContainer">
        <img
          id="img4"
          onMouseEnter={() => setShowimg4Tooltip(true)}
          onMouseLeave={() => setShowimg4Tooltip(false)}
          onMouseMove={handleMouseMove}
          className="AboutMeContent__container__picture"
          src={aboutMe4}
          alt="Myself during a hike in the Alps. I'm wearing a cap. Here we just reached the summit. There's another secret behind this p-i-c-t-u-r-e. Maybe one day I'll tell you."
        />
        {showimg4Tooltip && (
          <div
            className="toolTip--about1"
            style={{
              position: "fixed",
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
            }}
          >
            During a hike in the Alps. Here we just reached the summit.
          </div>
        )}
        <div className="AboutMeContent____container__txt">
          <h2>
            Team Collaboration{" "}
            <span className="blueSpan"> and Project achievment</span>
          </h2>
          <p>
            Throughout my career, I have successfully completed a variety of
            projects, from <span className="blueSpan">responsive websites</span>{" "}
            to <span className="blueSpan">mobile applications</span>. My ability
            to collaborate with cross-functional teams, including product
            managers and engineers, has been key to delivering high-quality,{" "}
            <span className="blueSpan">user-centric solutions</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
