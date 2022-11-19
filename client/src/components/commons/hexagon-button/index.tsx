import React, { ReactNode } from "react";
import "./index.scss";
export interface IHexagon {
  title: string,
  icon: ReactNode,
  css?: string
}

const Hexagon = ({ title, icon ,css}: IHexagon) => {
  return (
    <div className={`hexagon ${css}`}>
      <div className="hexagon__icon">{icon}</div>
      <div className="hexagon__title">{title}</div>
    </div>
  );
};

export default Hexagon;
