import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";
import terminalLogo from "@/assets/terminal-logo.svg";

type LogoProps = {
  isMenuOpen: boolean;
};

const Logo: React.FC<LogoProps> = ({ isMenuOpen }) => (
  <Link
    href="/"
    className={styles.logo}
    style={{ display: isMenuOpen ? "none" : "block" }}
  >
    <Image src={terminalLogo} alt="logo" width={40} height={40} unoptimized />
  </Link>
);

export default Logo;
