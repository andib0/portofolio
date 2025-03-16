import React, { FC } from "react";
import styles from "./FeaturedProjectTitle.module.css";

interface FeaturedProjectTitleProps {
  title: string;
}

const FeaturedProjectTitle: FC<FeaturedProjectTitleProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.featuredProject}>Featured Project</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default FeaturedProjectTitle;
