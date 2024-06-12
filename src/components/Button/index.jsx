import React from 'react';
import "./styles.css";

const Button = ({ onClick, children, className }) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

export default Button;