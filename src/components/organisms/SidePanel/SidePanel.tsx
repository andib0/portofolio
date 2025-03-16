import React from "react";
import style from "./SidePanel.module.css";
const SidePanel = ({
  children,
  left,
}: {
  children: React.ReactNode;
  left?: boolean;
}) => {
  return (
    <div
      className={style.container}
      style={{
        left: left ? "0px" : undefined,
        right: left ? undefined : "0px",
      }}
    >
      {children}
    </div>
  );
};

export default SidePanel;
