import React, { FC } from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import styles from "./ProjectPager.module.css";
import {
  caseStudyCopy,
  caseStudyHref,
  type FeaturedProject,
} from "@/utils/mocks/projects";

interface ProjectPagerProps {
  previous: FeaturedProject;
  next: FeaturedProject;
  repoHref?: string;
}

const ProjectPager: FC<ProjectPagerProps> = ({ previous, next, repoHref }) => {
  return (
    <div className={styles.pager}>
      {repoHref && (
        <a
          className={styles.repo}
          href={repoHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub aria-hidden="true" focusable="false" />
          {caseStudyCopy.repo}
        </a>
      )}
      <nav className={styles.nav} aria-label={caseStudyCopy.pagerLabel}>
        <Link
          className={styles.link}
          href={caseStudyHref(previous.slug)}
          rel="prev"
        >
          <span className={styles.direction}>{caseStudyCopy.previous}</span>
          <span className={styles.name}>{previous.title}</span>
        </Link>
        <Link
          className={`${styles.link} ${styles.next}`}
          href={caseStudyHref(next.slug)}
          rel="next"
        >
          <span className={styles.direction}>{caseStudyCopy.next}</span>
          <span className={styles.name}>{next.title}</span>
        </Link>
      </nav>
    </div>
  );
};

export default ProjectPager;
