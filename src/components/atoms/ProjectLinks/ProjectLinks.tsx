import React, { FC } from "react";
import { FiDownload, FiExternalLink, FiGithub } from "react-icons/fi";
import styles from "./ProjectLinks.module.css";
import type { ProjectAlign, ProjectLink } from "@/utils/mocks/projects";

interface ProjectLinksProps {
  links: ProjectLink[];
  align?: ProjectAlign;
  className?: string;
}

const icons: Record<ProjectLink["kind"], React.ElementType> = {
  github: FiGithub,
  live: FiExternalLink,
  download: FiDownload,
};

const ProjectLinks: FC<ProjectLinksProps> = ({
  links,
  align = "left",
  className = "",
}) => {
  return (
    <ul
      className={`${styles.links} ${align === "right" ? styles.right : ""} ${className}`}
    >
      {links.map((link) => {
        const Icon = icons[link.kind];
        return (
          <li key={link.href}>
            <a
              className={styles.link}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              <Icon aria-hidden="true" focusable="false" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectLinks;
