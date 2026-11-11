import React, { FC } from "react";
import styles from "./FeaturedProjectContainer.module.css";
import FeaturedProjectImageContainer from "@/components/atoms/FeaturedProjectImageContainer/FeaturedProjectImageContainer";
import FeaturedProjectContentContainer from "@/components/atoms/FeaturedProjectContentContainer/FeaturedProjectContentContainer";
import {
  caseStudyCopy,
  caseStudyHref,
  type FeaturedProject,
} from "@/utils/mocks/projects";

interface FeaturedProjectContainerProps {
  project: FeaturedProject;
  /** Puts the image on the right and the content on the left. */
  reversed?: boolean;
}

const FeaturedProjectContainer: FC<FeaturedProjectContainerProps> = ({
  project,
  reversed = false,
}) => {
  const href = caseStudyHref(project.slug);

  return (
    <article className={`${styles.row} ${reversed ? styles.reversed : ""}`}>
      <FeaturedProjectImageContainer
        className={styles.image}
        images={project.images}
        href={href}
        label={caseStudyCopy.frameLabel(project.title)}
      />
      <FeaturedProjectContentContainer
        className={styles.content}
        title={project.title}
        href={href}
        description={project.description}
        stack={project.stack}
        links={project.links}
        align={reversed ? "left" : "right"}
      />
    </article>
  );
};

export default FeaturedProjectContainer;
