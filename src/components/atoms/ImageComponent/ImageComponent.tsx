import React from "react";
import styles from "./ImageComponent.module.css";
import Image from "next/image";

type TImageComponent = {
  imageSrc: string;
  alt: string;
};

const ImageComponent: React.FC<TImageComponent> = ({ imageSrc, alt }) => {
  return (
    <div className={styles.imageWrapper}>
      <Image
        className={styles.image}
        src={imageSrc}
        alt={alt}
        fill
        // style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default ImageComponent;
