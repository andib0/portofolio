import React from "react";
import { FaCopyright } from "react-icons/fa";
import styles from "./Footer.module.css";
import SocialLinks from "@/components/molecules/SocialLinks/SocialLinks";
import { footer, site } from "@/utils/mocks/data";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      {/* The side panels are hidden on small screens, so their links move here. */}
      <div className={styles.mobileLinks}>
        <SocialLinks />
        <a href={`mailto:${site.email}`} className={styles.email}>
          {site.email}
        </a>
      </div>
      <p className={styles.credit}>
        <FaCopyright aria-hidden="true" />
        {new Date().getFullYear()} - {footer.credit}
      </p>
      <a
        href={site.source}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.source}
      >
        Source code
      </a>
    </div>
  </footer>
);

export default Footer;
