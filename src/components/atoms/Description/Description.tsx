import React from "react";
import styles from "./Description.module.css";

type TDescription = {
  partOneDescription: string;
  partTwoDescription: string;
  partThreeDescription: string;
};

const Description: React.FC<TDescription> = ({
  partOneDescription,
  partTwoDescription,
  partThreeDescription,
}) => {
  return (
    <div className={styles.container}>
      <p>{partOneDescription}</p>
      <p style={{ color: "var(--primary)", fontSize: "var(--text-sm)" }}>
        {partTwoDescription}
      </p>
      <p>{partThreeDescription}</p>
    </div>
  );
};

export default Description;
