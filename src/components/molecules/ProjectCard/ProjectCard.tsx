import React, { FC } from "react";
import { FiFolder } from "react-icons/fi";
import styles from "./ProjectCard.module.css";
import ProjectLinks from "@/components/atoms/ProjectLinks/ProjectLinks";
import FeaturedProjectStack from "@/components/atoms/FeaturedProjectStack/FeaturedProjectStack";
import { primaryLink, type OtherProject } from "@/utils/mocks/projects";

interface ProjectCardProps {
  project: OtherProject;
}

/*
  The title link stretches over the whole card, so the card is clickable
  without wrapping the icon links inside another link.
*/
const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const main = primaryLink(project.links);

  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <FiFolder className={styles.folder} aria-hidden="true" focusable="false" />
        <ProjectLinks
          className={styles.links}
          links={project.links}
          align="right"
        />
      </div>
      <h4 className={styles.title}>
        <a
          className={styles.titleLink}
          href={main.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}
        </a>
      </h4>
      <p className={styles.description}>{project.description}</p>
      <FeaturedProjectStack className={styles.stack} stack={project.stack} />
    </article>
  );
};

export default ProjectCard;
