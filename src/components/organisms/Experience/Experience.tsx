import React from "react";
import InfoTitle from "../InfoTitle/InfoTitle";
import SelectOption from "@/components/molecules/SelectOption/SelectOption";
import ExperimentDemo from "@/components/molecules/ExperimentDemo/ExperimentDemo";
import { options, sections } from "@/utils/mocks/data";

const Experience = () => {
  const titleId = `${sections.experience.id}-title`;

  return (
    <section
      id={sections.experience.id}
      className="section section--narrow"
      aria-labelledby={titleId}
    >
      <div className="reveal-section">
        <InfoTitle
          id={titleId}
          title={sections.experience.title}
          number={sections.experience.number}
        />
        <SelectOption
          initialSelected={0}
          options={options}
          label={sections.experience.title}
        />
      </div>
      <div className="reveal-section">
        <ExperimentDemo />
      </div>
    </section>
  );
};

export default Experience;
