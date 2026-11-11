import React from "react";
import styles from "./ListComponent.module.css";

type TListComponent = {
  items: string[];
};

const ListComponent: React.FC<TListComponent> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item} className={styles.listItem}>
          <span className={styles.arrow} aria-hidden="true">
            ▷
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
