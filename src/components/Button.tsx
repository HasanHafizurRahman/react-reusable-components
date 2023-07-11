import React from "react";

const Button = ({ children, icon, style }) => {
  const buttonStyles = `${style}`;

  return (
    <button className={buttonStyles}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
