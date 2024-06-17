import React, { useState } from "react";
import "./styles.css";

const Filter = ({ onClick, children, className, id }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleCombinedClick = (event) => {
    handleClick();
    onClick && onClick(event);
  };

  return (
    <div className={`${className}${isActive ? '--active' : ''}`} 
    onClick={handleCombinedClick} id={id}>
      {children}
    </div>
  );
};

export default Filter;
