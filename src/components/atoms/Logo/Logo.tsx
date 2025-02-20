import React from "react";
import Link from "next/link";
import styles from "./Logo.module.css";

type LogoProps = {
  isMenuOpen: boolean;
};

const Logo: React.FC<LogoProps> = ({ isMenuOpen }) => (
  <Link
    href="/"
    className={styles.logo}
    style={{ display: isMenuOpen ? "none" : "block" }}
  >
    AB.
  </Link>
);

export default Logo;
