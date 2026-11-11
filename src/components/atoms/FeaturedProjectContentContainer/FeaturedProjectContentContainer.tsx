import React, { FC } from "react";
import Link from "next/link";
import styles from "./FeaturedProjectContentContainer.module.css";
import FeaturedProjectTitle from "../FeaturedProjectTitle/FeaturedProjectTitle";
import FeaturedProjectDescription from "../FeaturedProjectDescription/FeaturedProjectDescription";
import FeaturedProjectStack from "../FeaturedProjectStack/FeaturedProjectStack";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import {
  caseStudyCopy,
  type ProjectAlign,
  type ProjectLink,
} from "@/utils/mocks/projects";

interface FeaturedProjectContentContainerProps {
  title: string;
  /** The project's case-study page. */
  href: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  align?: ProjectAlign;
  className?: string;
}

const FeaturedProjectContentContainer: FC<
  FeaturedProjectContentContainerProps
> = ({ title, href, description, stack, links, align = "left", className = "" }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <FeaturedProjectTitle title={title} href={href} align={align} />
      <FeaturedProjectDescription description={description} align={align} />
      <FeaturedProjectStack
        className={styles.stack}
        stack={stack}
        align={align}
      />
      <div
        className={`${styles.actions} ${align === "right" ? styles.right : ""}`}
      >
        <Link className={styles.caseStudy} href={href}>
          {caseStudyCopy.readLink}
          <span className="visually-hidden">: {title}</span>
        </Link>
        <ProjectLinks links={links} align={align} />
      </div>
    </div>
  );
};

export default FeaturedProjectContentContainer;
