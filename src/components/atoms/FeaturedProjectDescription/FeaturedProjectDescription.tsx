import React, { FC } from "react";
import styles from "./FeaturedProjectDescription.module.css";
import type { ProjectAlign } from "@/utils/mocks/projects";

interface FeaturedProjectDescriptionProps {
  description: string;
  align?: ProjectAlign;
}

const FeaturedProjectDescription: FC<FeaturedProjectDescriptionProps> = ({
  description,
  align = "left",
}) => {
  return (
    <div
      className={`${styles.container} ${align === "right" ? styles.right : ""}`}
    >
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FeaturedProjectDescription;
