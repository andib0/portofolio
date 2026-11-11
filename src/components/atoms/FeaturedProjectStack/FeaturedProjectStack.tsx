import React, { FC } from "react";
import styles from "./FeaturedProjectStack.module.css";
import type { ProjectAlign } from "@/utils/mocks/projects";

interface FeaturedProjectStackProps {
  stack: string[];
  align?: ProjectAlign;
  className?: string;
}

const FeaturedProjectStack: FC<FeaturedProjectStackProps> = ({
  stack,
  align = "left",
  className = "",
}) => {
  return (
    <ul
      className={`${styles.container} ${align === "right" ? styles.right : ""} ${className}`}
    >
      {stack.map((item) => (
        <li key={item} className={styles.stackItem}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FeaturedProjectStack;
