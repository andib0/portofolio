import React from "react";
import InfoTitle from "../InfoTitle/InfoTitle";
import FeaturedProjectContainer from "@/components/molecules/FeaturedProjectContainer/FeaturedProjectContainer";
import styles from "./FeaturedProjects.module.css";
import { sections } from "@/utils/mocks/data";
import { featuredProjects } from "@/utils/mocks/projects";

const FeaturedProjects = () => {
  return (
    <section id={sections.work.id} className="section section--wide">
      <InfoTitle title={sections.work.title} number={sections.work.number} />
      <ol className={styles.list}>
        {featuredProjects.map((project, index) => (
          <li key={project.slug} className="reveal-section">
            <FeaturedProjectContainer
              project={project}
              reversed={index % 2 === 1}
            />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default FeaturedProjects;
