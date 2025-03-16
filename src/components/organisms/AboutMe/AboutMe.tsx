import Description from "@/components/atoms/Description/Description";
import ImageComponent from "@/components/atoms/ImageComponent/ImageComponent";
import ListComponent from "@/components/atoms/ListComponent/ListComponent";
import React from "react";
import styles from "./AboutMe.module.css";
import InfoTitle from "../InfoTitle/InfoTitle";
type TAboutMe = {
  imageSrc: string;
  alt: string;
  items: string[];
};
import useScrollReveal from "@/hooks/useScrollReveal";
import {
  partOneDescription,
  partThreeDescription,
  partTwoDescription,
} from "@/utils/mocks/data";

const AboutMe: React.FC<TAboutMe> = ({ imageSrc, alt, items }) => {
  useScrollReveal();
  return (
    <div className={styles.container}>
      <div className="reveal-section">
        <InfoTitle title="About Me" number="01" />
        <div className={styles.innerContainer}>
          <div>
            <Description
              partOneDescription={partOneDescription}
              partTwoDescription={partTwoDescription}
              partThreeDescription={partThreeDescription}
            />
            <ListComponent items={items} />
          </div>
          <ImageComponent alt={alt} imageSrc={imageSrc} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
