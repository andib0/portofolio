import React from "react";
import styles from "./SidePanel.module.css";

const SidePanel = ({
  children,
  left,
}: {
  children: React.ReactNode;
  left?: boolean;
}) => (
  <div className={`${styles.container} ${left ? styles.left : styles.right}`}>
    {children}
  </div>
);

export default SidePanel;
