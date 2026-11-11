import React from "react";
import ProjectCard from "@/components/molecules/ProjectCard/ProjectCard";
import styles from "./OtherProjects.module.css";
import { otherProjects, otherProjectsSection } from "@/utils/mocks/projects";

const OtherProjects = () => {
  return (
    <section
      className="section section--wide"
      aria-labelledby="other-projects-title"
    >
      <div className="reveal-section">
        <header className={styles.header}>
          <h3 id="other-projects-title" className={styles.title}>
            {otherProjectsSection.title}
          </h3>
          <a
            className={styles.archive}
            href={otherProjectsSection.archive.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {otherProjectsSection.archive.label}
          </a>
        </header>
        <ul className={styles.grid}>
          {otherProjects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OtherProjects;
