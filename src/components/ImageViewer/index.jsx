import React, { useState, useEffect, useCallback } from "react";
import arrowRight from "../../assets/svg/arrow_right.svg";
import close from "../../assets/svg/close.svg";
import "./styles.css";

const ImageViewer = ({ images }) => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index) => {
    setCurrentIndex(index);
    setViewerOpen(true);
  };

  const closeViewer = () => {
    setViewerOpen(false);
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        goToNext();
      } else if (event.key === "ArrowLeft") {
        goToPrevious();
      }
    };

    if (viewerOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [viewerOpen, goToNext, goToPrevious]);


  return (
    <div className="viewerGallery" style={{ columnCount: images.length < 5 ? 2 : 4 }}>
      {images.map((src, index) => (
        <img
          className="galleryImg"
          key={index}
          src={src}
          alt=""
          onClick={() => openViewer(index)}
        />
      ))}

      {viewerOpen && (
        <div className="viewerOverlay" onClick={closeViewer}>
          <button className="viewerButton--left" onClick={(e) => { e.stopPropagation(); goToPrevious(); }}>
            <img src={arrowRight} alt="arrow left" />
          </button>
          <img src={images[currentIndex]} alt="" className="viewerImage"  onClick={(e) => e.stopPropagation()} />
          <p className="viewerCounter">
            {currentIndex + 1} / {images.length}
            </p>
          <button className="viewerButton--close" onClick={closeViewer}>
            <img src={close} alt="close" />
          </button>
          <button className="viewerButton--right" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
            <img src={arrowRight} alt="arrow right" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
