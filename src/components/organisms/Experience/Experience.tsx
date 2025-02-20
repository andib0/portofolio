import React from "react";
import styles from "./Experience.module.css";
import InfoTitle from "../InfoTitle/InfoTitle";
import SelectOption from "@/components/molecules/SelectOption/SelectOption";

const options = [
  {
    value: 0,
    label: "Google",
    details: {
      role: "Developer",
      company: "ZeroTechnologies",
      tasks: [
        "collaborated",
        "built and delivered",
        "developed and styled interactive web apps",
      ],
    },
  },
  {
    value: 1,
    label: "Microsoft",
    details: {
      role: "Developer",
      company: "ZeroTechnologies",
      tasks: [
        "collaborated",
        "built and delivered",
        "developed and styled interactive web apps",
      ],
    },
  },
  {
    value: 2,
    label: "Apple",
    details: {
      role: "Developer",
      company: "ZeroTechnologies",
      tasks: [
        "collaborated",
        "built and delivered",
        "developed and styled interactive web apps",
      ],
    },
  },
];

const Experience = () => {
  return (
    <div className={styles.container}>
      <InfoTitle title="Where I've Worked" number="02" />
      <SelectOption initialSelected={0} options={options} />
    </div>
  );
};

export default Experience;
