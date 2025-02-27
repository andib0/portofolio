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

const partOneDescription =
  "As a developer, I'm dedicated to building applications that deliver both functionality and outstanding user experiences. I write clean, maintainable code and continually expand my skills to keep up with new technologies in web and mobile development. Whether it's a complex mobile apps with React Native or  web apps with React.js / Next.js, I approach every project with enthusiasm and a commitment to excellence.";

const partTwoDescription =
  "I'm always open to new challenges and collaborations—let's bring your ideas to life!";

const partThreeDescription = "Some of the technnologies I'm familiar with are:";

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
