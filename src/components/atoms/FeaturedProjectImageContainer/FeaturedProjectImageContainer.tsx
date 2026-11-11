import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedProjectImageContainer.module.css";
import type { ProjectImage } from "@/utils/mocks/projects";

interface FeaturedProjectImageContainerProps {
  images: ProjectImage[];
  /** Internal page the frame links to. Without it the frame is a plain figure. */
  href?: string;
  /** Accessible name for the link; the screenshots' alt text is used otherwise. */
  label?: string;
  /** Load the screenshots eagerly when the frame is above the fold. */
  priority?: boolean;
  className?: string;
}

const FeaturedProjectImageContainer: FC<FeaturedProjectImageContainerProps> = ({
  images,
  href,
  label,
  priority = false,
  className = "",
}) => {
  const isPair = images.length > 1;

  const canvas = (
    <span className={styles.canvas}>
      {images.map((image) => (
        <Image
          key={image.src.src}
          className={`${styles.image} ${isPair ? styles.half : ""}`}
          src={image.src}
          alt={image.alt}
          priority={priority}
        />
      ))}
    </span>
  );

  if (!href) {
    return <div className={`${styles.frame} ${className}`}>{canvas}</div>;
  }

  return (
    <Link
      className={`${styles.frame} ${className}`}
      href={href}
      aria-label={label}
    >
      {canvas}
    </Link>
  );
};

export default FeaturedProjectImageContainer;
