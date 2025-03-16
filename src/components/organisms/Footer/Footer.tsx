import React from "react";
import { FaCopyright } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <FaCopyright />
          {new Date().getFullYear()} - Build by Andi Basha
        </div>
      </div>
    </footer>
  );
};

export default Footer;
