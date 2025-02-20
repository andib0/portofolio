import React from "react";
import styles from "./ListComponent.module.css";

type TListComponent = {
  items: string[];
};

const ListComponent: React.FC<TListComponent> = ({ items }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.listItem}>
            <span className={styles.arrow}>▷</span>
            <span className={styles.itemText}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
