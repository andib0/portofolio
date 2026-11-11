import React, { FC } from "react";
import Link from "next/link";
import styles from "./FeaturedProjectTitle.module.css";
import { featuredLabel, type ProjectAlign } from "@/utils/mocks/projects";

interface FeaturedProjectTitleProps {
  title: string;
  /** Internal page the title links to (the project's case study). */
  href: string;
  align?: ProjectAlign;
}

const FeaturedProjectTitle: FC<FeaturedProjectTitleProps> = ({
  title,
  href,
  align = "left",
}) => {
  return (
    <div
      className={`${styles.container} ${align === "right" ? styles.right : ""}`}
    >
      <p className={styles.featuredProject}>{featuredLabel}</p>
      <h3 className={styles.title}>
        <Link href={href}>{title}</Link>
      </h3>
    </div>
  );
};

export default FeaturedProjectTitle;
