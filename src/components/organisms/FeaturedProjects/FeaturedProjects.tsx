import React from "react";
import InfoTitle from "../InfoTitle/InfoTitle";
import { sections } from "@/utils/mocks/data";

/* Stub: the projects agent builds this section. */
const FeaturedProjects = () => {
  return (
    <section id={sections.work.id} className="section section--wide">
      <InfoTitle title={sections.work.title} number={sections.work.number} />
    </section>
  );
};

export default FeaturedProjects;
