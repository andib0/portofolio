import React from "react";
import Description from "@/components/atoms/Description/Description";
import ImageComponent from "@/components/atoms/ImageComponent/ImageComponent";
import ListComponent from "@/components/atoms/ListComponent/ListComponent";
import InfoTitle from "../InfoTitle/InfoTitle";
import styles from "./AboutMe.module.css";
import profile from "@/assets/profile.webp";
import {
  partOneDescription,
  partThreeDescription,
  partTwoDescription,
  sections,
  site,
  technologies,
} from "@/utils/mocks/data";

const AboutMe: React.FC = () => {
  const titleId = `${sections.about.id}-title`;

  return (
    <section
      id={sections.about.id}
      className="section"
      aria-labelledby={titleId}
    >
      <div className="reveal-section">
        <InfoTitle
          id={titleId}
          title={sections.about.title}
          number={sections.about.number}
        />
        <div className={styles.inner}>
          <div className={styles.text}>
            <Description
              partOneDescription={partOneDescription}
              partTwoDescription={partTwoDescription}
              partThreeDescription={partThreeDescription}
            />
            <ListComponent items={technologies} />
          </div>
          <div className={styles.portrait}>
            <ImageComponent alt={`Portrait of ${site.name}`} image={profile} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
