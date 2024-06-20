import React from "react";
import "./styles.css";
import Button from "../Button";
import arrow_right_long from "../../assets/svg/arrow_right_long.svg";

const PageCounter = ({ currentPage, totalPage, next, previous }) => {
  return (
    <div className="pageCounterContainer">
      {currentPage === 1 ? (
        <Button id="pagePrevious" className="paginationButton invisibleButton">
          <img
            src={arrow_right_long}
            className="rotate180"
            alt="an arrow to the left, to click previous page"
          />
        </Button>
      ) : (
        <Button id="pagePrevious" className="paginationButton" onClick={previous}>
          <img
            src={arrow_right_long}
            className="rotate180"
            alt="an arrow to the left, to click previous page"
          />
        </Button>
      )}
      <div className="pageCounter">
        {currentPage} / {totalPage}
      </div>
      {currentPage === totalPage ? (
        <Button id="pageNext" className="paginationButton invisibleButton">
          <img
            src={arrow_right_long}
            alt="an arrow to the left, to click previous page"
          />
        </Button>
      ) : (
        <Button id="pageNext" className="paginationButton" onClick={next}>
          <img
            src={arrow_right_long}
            alt="an arrow to the left, to click previous page"
          />
        </Button>
      )}
    </div>
  );
};

export default PageCounter;
