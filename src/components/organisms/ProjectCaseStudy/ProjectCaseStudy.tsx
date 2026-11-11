import React, { FC } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import styles from "./ProjectCaseStudy.module.css";
import FeaturedProjectStack from "@/components/atoms/FeaturedProjectStack/FeaturedProjectStack";
import FeaturedProjectImageContainer from "@/components/atoms/FeaturedProjectImageContainer/FeaturedProjectImageContainer";
import ProjectLinks from "@/components/atoms/ProjectLinks/ProjectLinks";
import ProjectFacts from "@/components/molecules/ProjectFacts/ProjectFacts";
import ProjectPager from "@/components/molecules/ProjectPager/ProjectPager";
import {
  caseStudyCopy,
  featuredLabel,
  type FeaturedProject,
} from "@/utils/mocks/projects";

interface ProjectCaseStudyProps {
  project: FeaturedProject;
  previous: FeaturedProject;
  next: FeaturedProject;
}

const ProjectCaseStudy: FC<ProjectCaseStudyProps> = ({
  project,
  previous,
  next,
}) => {
  const { caseStudy } = project;
  const repo = project.links.find((link) => link.kind === "github");

  return (
    <article className={`section section--wide ${styles.page}`}>
      <header className={styles.header}>
        <Link className={styles.back} href={caseStudyCopy.back.href}>
          <FiArrowLeft aria-hidden="true" focusable="false" />
          {caseStudyCopy.back.label}
        </Link>
        <p className={styles.overline}>{featuredLabel}</p>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.summary}>{caseStudy.summary}</p>
        <FeaturedProjectStack stack={project.stack} />
        <ProjectLinks className={styles.links} links={project.links} />
      </header>

      <FeaturedProjectImageContainer
        className={styles.frame}
        images={project.images}
        priority
      />

      <div className={`${styles.body} reveal-section`}>
        <ProjectFacts
          className={styles.facts}
          facts={caseStudy.facts}
          label={caseStudyCopy.factsLabel}
        />
        <div className={styles.sections}>
          {caseStudy.sections.map((section) => (
            <section key={section.heading} className={styles.section}>
              <h2 className={styles.heading}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>

      <ProjectPager previous={previous} next={next} repoHref={repo?.href} />
    </article>
  );
};

export default ProjectCaseStudy;
