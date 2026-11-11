import React, { FC } from "react";
import styles from "./InfoTitle.module.css";

type TInfoTitle = {
  number: string;
  title: string;
  /** Optional id so the section can point `aria-labelledby` at the title. */
  id?: string;
};

const InfoTitle: FC<TInfoTitle> = ({ number, title, id }) => {
  return (
    <h2 id={id} className={styles.title}>
      <span className={styles.number}>{number}.</span>
      <span className={styles.text}>{title}</span>
      <span className={styles.line} aria-hidden="true" />
    </h2>
  );
};

export default InfoTitle;
