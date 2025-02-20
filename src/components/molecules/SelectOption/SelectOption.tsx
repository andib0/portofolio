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

  return (
    options.length > 0 && (
      <div className={styles.container}>
        {options.map((option, index) => (
          <div className={styles.innerContainer} key={index}>
            <div
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
            <div className={styles.details}>
              {selected === option.value && (
                <p>
                  {option.details.role} @ {option.details.company}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default SelectOption;
