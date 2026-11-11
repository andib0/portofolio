import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./ImageComponent.module.css";

type TImageComponent = {
  image: StaticImageData;
  alt: string;
};

const ImageComponent: React.FC<TImageComponent> = ({ image, alt }) => {
  return (
    <div className={styles.imageWrapper}>
      <Image className={styles.image} src={image} alt={alt} fill />
    </div>
  );
};

export default ImageComponent;
