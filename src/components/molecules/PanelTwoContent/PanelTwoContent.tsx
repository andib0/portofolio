import React from "react";
import styles from "./PanelTwoContent.module.css";
import VerticalLine from "@/components/atoms/VerticalLine/VerticalLine";
import { site } from "@/utils/mocks/data";

const PanelTwoContent = () => (
  <div className={styles.panel}>
    <a href={`mailto:${site.email}`} className={styles.email}>
      {site.email}
    </a>
    <VerticalLine />
  </div>
);

export default PanelTwoContent;
