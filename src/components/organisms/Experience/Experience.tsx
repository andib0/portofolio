import React from "react";
import styles from "./Experience.module.css";
import InfoTitle from "../InfoTitle/InfoTitle";
import SelectOption from "@/components/molecules/SelectOption/SelectOption";
import useScrollReveal from "@/hooks/useScrollReveal";

const options = [
  {
    value: 0,
    label: "Innovative Solutions",
    time: "Apr 2023 - Oct 2024",
    details: {
      role: "React Native Developer",
      company: "Innovative Solutions",
      tasks: [
        "Developed new features & optimized existing apps",
        "Integrated REST & GraphQL APIs for data management",
        "Collaborated with UX/UI & backend teams on scalable architectures",
        "Monitored performance using Firebase, Sentry",
        "Worked with Zustand, React Hook Form, TanStack Query, & i18next",
        "Version control with Git including branching strategies & code reviews",
      ],
    },
  },
  {
    value: 1,
    label: "CEC",
    time: "Jul 2021 - Dec 2021",
    details: {
      role: "Database Officer",
      company: "CEC",
      tasks: [
        "Extracted, transformed & loaded (ETL) data",
        "Performed database backup, recovery & tuning",
        "Provided administrative & technical support",
      ],
    },
  },
  {
    value: 2,
    label: "NightDesign Studio",
    time: "Jun 2017 - Mar 2019",
    details: {
      role: "Office Administrator",
      company: "NightDesign Studio",
      tasks: [
        "Managed office administration & client communications",
        "Created reports, handled documentation & translations",
        "Organized meetings, scheduled visits & maintained filing systems",
      ],
    },
  },
];

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
