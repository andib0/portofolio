import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./ImageComponent.module.css";

type TImageComponent = {
  image: StaticImageData;
  alt: string;
};

const ImageComponent: React.FC<TImageComponent> = ({ image, alt }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        <Image
          className={styles.image}
          src={image}
          alt={alt}
          sizes="(max-width: 768px) 70vw, 300px"
        />
      </div>
    </div>
  );
};

export default ImageComponent;
