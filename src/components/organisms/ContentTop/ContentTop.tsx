import React from "react";
import styles from "./ContentTop.module.css";

const ContentTop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lCenter}>
        <p className={styles.greet}>Hi, my name is</p>
        <p className={styles.titleOne}>Andi Basha.</p>
        <p className={styles.titleTwo}>I build mobile & web things.</p>
        <p className={styles.titleContent}>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products.
        </p>
      </div>
    </div>
  );
};

export default ContentTop;
