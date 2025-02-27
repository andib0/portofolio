"use client";

import React, { FC, useState } from "react";
import styles from "./SelectOption.module.css";

type SelectOptionProps = {
  options: {
    value: number;
    label: string;
    details: { role: string; company: string; tasks: string[] };
  }[];
  initialSelected?: number;
};

const SelectOption: FC<SelectOptionProps> = ({
  options,
  initialSelected = 0,
}) => {
  const [selected, setSelected] = useState(initialSelected);
  const isSelected = (option: number) => selected === option;

  console.log(options[selected]);

  return (
    options.length > 0 && (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          {options.map((option, index) => (
            <div
              key={index}
              className={`${styles.optionLabel} ${
                isSelected(option.value) ? styles.selected : ""
              }`}
            >
              <p
                className={`${styles.option}`}
                onClick={() => setSelected(index)}
              >
                {option.label}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.rightContainer}>
          {
            <div className={styles.details}>
              {options[selected].value >= 0 && (
                <>
                  <p className={styles.workLabel}>
                    <span className={styles.workRole}>
                      {options[selected].details.role}
                    </span>{" "}
                    @ {options[selected].details.company}
                  </p>
                  <ul className={styles.roleTasks}>
                    {options[selected].details.tasks.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </>
              )}
            </div>
          }
        </div>
      </div>
    )
  );
};

export default SelectOption;
