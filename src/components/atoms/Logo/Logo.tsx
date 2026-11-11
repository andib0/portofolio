import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";
import terminalLogo from "@/assets/terminal-logo.svg";
import { site } from "@/utils/mocks/data";

type LogoProps = {
  onClick?: () => void;
};

const Logo: React.FC<LogoProps> = ({ onClick }) => (
  <Link
    href="/"
    className={styles.logo}
    aria-label={`${site.name}, home`}
    onClick={onClick}
  >
    <Image src={terminalLogo} alt="" width={40} height={40} unoptimized />
  </Link>
);

export default Logo;
