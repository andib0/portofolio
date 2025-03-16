import React, { FC } from "react";
import styles from "./InfoTitle.module.css";

type TInfoTitle = {
  number: string;
  title: string;
};

const InfoTitle: FC<TInfoTitle> = ({ number, title }) => {
  return (
    <div className={styles.container}>
      <span className={styles.noFormat}>{number}.</span>
      <span className={styles.titleFormat}>{title}</span>
      <div className={styles.horizontalLine} />
    </div>
  );
};

export default InfoTitle;
