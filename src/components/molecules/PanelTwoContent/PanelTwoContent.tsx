import React from "react";
import styles from "./PanelTwoContent.module.css";
import VerticalLine from "@/components/atoms/VerticalLine/VerticalLine";

const PanelTwoContent = () => {
  return (
    <div className={styles.socialLinks}>
      <a
        href="mailto:andi.basha@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        andi.basha@gmail.com
      </a>

      <VerticalLine />
    </div>
  );
};

export default PanelTwoContent;
