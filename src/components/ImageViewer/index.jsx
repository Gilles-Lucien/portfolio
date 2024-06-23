import React, { useState } from "react";
import arrowRight from "../../assets/svg/arrow_right.svg";
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

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="viewerGallery">
      {images.map((src, index) => (
        <img className="galleryImg" key={index} src={src} alt="" onClick={() => openViewer(index)} />
      ))}

      {viewerOpen && (
        <div className="viewerOverlay">
          <button className="viewerButton--previous" onClick={goToPrevious}>
          <img src={arrowRight} alt="arrow left" />
          </button>
          <img src={images[currentIndex]} alt="" className="viewerImage" />
          <button className="viewerButton--close" onClick={closeViewer}>
            Fermer
          </button>

          <button className="viewerButton--next" onClick={goToNext}>
          <img src={arrowRight} alt="arrow right" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
