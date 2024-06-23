import React, { useState } from "react";
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
