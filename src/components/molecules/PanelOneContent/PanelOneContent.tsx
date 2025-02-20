import React from "react";
import styles from "./PanelOneContent.module.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import VerticalLine from "@/components/atoms/VerticalLine/VerticalLine";
const PanelOneContent = () => {
  return (
    <div className={styles.socialLinks}>
      <a
        href="https://www.linkedin.com/in/andibasha"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <FaLinkedin size={16} />
      </a>
      <a
        href="https://github.com/andib0"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <FaGithub size={16} />
      </a>
      <a
        href="https://www.instagram.com/andibashaa"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <FaInstagram size={16} />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <FaTwitter size={16} />
      </a>
      <a
        href="https://www.facebook.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <FaFacebook size={16} />
      </a>
      <VerticalLine />
    </div>
  );
};

export default PanelOneContent;
