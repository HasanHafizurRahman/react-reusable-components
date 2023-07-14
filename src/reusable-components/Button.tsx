import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  icon?: ReactNode;
  style: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: string;
};

const Button = ({ children, icon, style, onClick }: ButtonProps) => {
  return (
    <button className={style} onClick={onClick}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
