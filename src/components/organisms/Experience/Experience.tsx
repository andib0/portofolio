import React from "react";
import styles from "./Experience.module.css";
import InfoTitle from "../InfoTitle/InfoTitle";
import SelectOption from "@/components/molecules/SelectOption/SelectOption";
import { options, sections } from "@/utils/mocks/data";

const Experience = () => {
  return (
    <section id={sections.experience.id} className={styles.container}>
      <div className="reveal-section">
        <InfoTitle
          title={sections.experience.title}
          number={sections.experience.number}
        />
        <SelectOption initialSelected={0} options={options} />
      </div>
    </section>
  );
};

export default Experience;
