import React, { FC } from "react";
import styles from "./ProjectFacts.module.css";
import type { ProjectFact } from "@/utils/mocks/projects";

interface ProjectFactsProps {
  facts: ProjectFact[];
  label: string;
  className?: string;
}

const ProjectFacts: FC<ProjectFactsProps> = ({ facts, label, className = "" }) => {
  return (
    <aside className={`${styles.card} ${className}`} aria-label={label}>
      <dl className={styles.list}>
        {facts.map((fact) => (
          <div key={fact.label} className={styles.item}>
            <dt className={styles.label}>{fact.label}</dt>
            <dd className={styles.value}>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
};

export default ProjectFacts;
