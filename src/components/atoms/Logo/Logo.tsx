import React from "react";
import Link from "next/link";
import styles from "./Logo.module.css";
import Image from "next/image";
type LogoProps = {
  isMenuOpen: boolean;
};

const Logo: React.FC<LogoProps> = ({ isMenuOpen }) => (
  <Link
    href="/"
    className={styles.logo}
    style={{ display: isMenuOpen ? "none" : "block" }}
  >
    <Image
      src={"/images/terminal-logo.svg"}
      alt="logo"
      width={40}
      height={40}
    />
  </Link>
);

export default Logo;
