import React, { FC } from "react";
import styles from "./FeaturedProjectDescription.module.css";

interface FeaturedProjectDescriptionProps {
  description: string;
}

const FeaturedProjectDescription: FC<FeaturedProjectDescriptionProps> = ({
  description,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FeaturedProjectDescription;
