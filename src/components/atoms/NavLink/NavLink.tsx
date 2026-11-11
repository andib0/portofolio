import React from "react";
import Link from "next/link";
import styles from "./NavLink.module.css";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  /** Marks the link for the section currently in view. */
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  onClick,
  isActive = false,
}) => (
  <Link
    href={href}
    className={`${styles.navLink} ${isActive ? styles.active : ""}`}
    aria-current={isActive ? "location" : undefined}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default NavLink;
