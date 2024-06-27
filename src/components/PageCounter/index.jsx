import React from "react";
import "./styles.css";
import Button from "../Button";
import arrow_right_long from "../../assets/svg/arrow_right_long.svg";

const PageCounter = ({ currentPage, totalPage, next, previous }) => {



  if (totalPage === 0) return null;

  return (
    <div className="pageCounterContainer">
      {currentPage === 1 ? (
        <Button id="pagePrevious" className="paginationButton pagePrevious invisibleButton">
          <img
            src={arrow_right_long}
            className="rotate180"
            alt="an arrow to the left, to click previous page"
          />
        </Button>
      ) : (
        <Button
          id="pagePrevious"
          className="paginationButton pagePrevious"
          onClick={previous}
          onTouchEnd={previous}
        >
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
        <Button id="pageNext" className="paginationButton pageNext invisibleButton">
          <img
            src={arrow_right_long}
            alt="an arrow to the right, to click next page"
          />
        </Button>
      ) : (
        <Button id="pageNext" className="paginationButton pageNext" onClick={next} onTouchEnd={next}>
          <img
            src={arrow_right_long}
            alt="an arrow to the right, to click next page"
          />
        </Button>
      )}
    </div>
  );
};

export default PageCounter;
