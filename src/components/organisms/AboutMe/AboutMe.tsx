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
  technologies,
} from "@/utils/mocks/data";

const AboutMe: React.FC = () => {
  return (
    <section id={sections.about.id} className={styles.container}>
      <div className="reveal-section">
        <InfoTitle
          title={sections.about.title}
          number={sections.about.number}
        />
        <div className={styles.innerContainer}>
          <div>
            <Description
              partOneDescription={partOneDescription}
              partTwoDescription={partTwoDescription}
              partThreeDescription={partThreeDescription}
            />
            <ListComponent items={technologies} />
          </div>
          <ImageComponent alt="Portrait of Andi Basha" image={profile} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
