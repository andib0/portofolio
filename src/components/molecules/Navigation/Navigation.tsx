import React from "react";
import NavLink from "../../atoms/NavLink/NavLink";
import styles from "./Navigation.module.css";

interface NavigationProps {
  isOpen: boolean;
}

const navData = [
  { href: "/", label: "About" },
  { href: "/", label: "Experience" },
  { href: "/", label: "Work" },
  { href: "/", label: "Contact" },
];

const Navigation: React.FC<NavigationProps> = ({ isOpen }) => (
  <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
    <ul className={styles.navList}>
      {navData.map((item, index) => (
        <li key={item.href}>
          <span className={styles.navIndex}>{index}.</span>
          <NavLink href={item.href}>{item.label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
