import React from "react";
import "./styles.css";
import Button from "../Button";
import arrow_right_long from "../../assets/svg/arrow_right_long.svg";

const ProjectNav = ({ projectId, totalProjects, next, previous }) => {
  const projectIdNumber = parseInt(projectId, 10);
  const totalProjectsNumber = parseInt(totalProjects, 10);

  return (
    <div className="projectNavContainer">
      {projectIdNumber === 1 ? (
        <Button id="pagePrevious" className="paginationButton invisibleButton">
          <img
            src={arrow_right_long}
            className="rotate180"
            alt="an arrow to the left, to click previous page"
          />
        </Button>
      ) : (
        <div
          className="buttonNavContainer buttonNavColumnReverseMobile"
          onClick={previous}
          onTouchEnd={previous}
        >
          <Button
            id="pagePrevious"
            className="paginationButton"
            // onClick={previous}
            // onTouchEnd={previous}
          >
            <img
              src={arrow_right_long}
              className="rotate180"
              alt="an arrow to the left, to click previous page"
            />
          </Button>
          <div className="pageCounter">See previous project</div>
        </div>
      )}

      {projectIdNumber === totalProjectsNumber ? (
        <Button id="pageNext" className="paginationButton invisibleButton">
          <img
            src={arrow_right_long}
            alt="an arrow to the left, to click previous page"
          />
        </Button>
      ) : (
        <div className="buttonNavContainer" onClick={next} onTouchEnd={next}>
          <div className="pageCounter">See next project</div>
          <Button
            id="pageNext"
            className="paginationButton"
            // onClick={next}
            // onTouchEnd={next}
          >
            <img
              src={arrow_right_long}
              alt="an arrow to the left, to click previous page"
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectNav;
