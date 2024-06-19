import React from "react";
import "./styles.css";

const Filter = ({ onClick, children, className, id, isActive }) => {
  const handleClick = () => {
    onClick && onClick(id);
  };

  return (
    <div
      className={`${className}${isActive ? '--active' : ''}`}
      onClick={handleClick}
      id={id}
    >
      {children}
    </div>
  );
};

export default Filter;