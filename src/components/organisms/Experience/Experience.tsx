import React from "react";
import styles from "./Experience.module.css";
import InfoTitle from "../InfoTitle/InfoTitle";
import SelectOption from "@/components/molecules/SelectOption/SelectOption";
import useScrollReveal from "@/hooks/useScrollReveal";
import { options } from "@/utils/mocks/data";

const Experience = () => {
  useScrollReveal();
  return (
    <div className={styles.container}>
      <div className="reveal-section">
        <InfoTitle title="Where I've Worked" number="02" />
        <SelectOption initialSelected={0} options={options} />
      </div>
    </div>
  );
};

export default Experience;
