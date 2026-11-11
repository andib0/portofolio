import React from "react";
import styles from "./PanelOneContent.module.css";
import SocialLinks from "@/components/molecules/SocialLinks/SocialLinks";
import VerticalLine from "@/components/atoms/VerticalLine/VerticalLine";

const PanelOneContent = () => (
  <div className={styles.panel}>
    <SocialLinks direction="column" />
    <VerticalLine />
  </div>
);

export default PanelOneContent;
