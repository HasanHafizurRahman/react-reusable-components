import React, { MouseEventHandler, ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  style: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IButtonProps> = ({ children, icon, style, onClick }) => {
  const buttonStyles = `${style}`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
