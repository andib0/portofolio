import React, { FC } from "react";
import styles from "./FeaturedProjectStack.module.css";

interface FeaturedProjectStackProps {
  stack: string[];
}

const FeaturedProjectStack: FC<FeaturedProjectStackProps> = ({ stack }) => {
  return (
    <div className={styles.container}>
      {stack.map((item, index) => (
        <span key={index} className={styles.stackItem}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default FeaturedProjectStack;
