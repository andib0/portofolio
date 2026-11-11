import React from "react";
import NavLink from "../../atoms/NavLink/NavLink";
import styles from "./Navigation.module.css";
import { asset, navItems, resume } from "@/utils/mocks/data";

interface NavigationProps {
  id: string;
  isOpen: boolean;
  onNavigate: () => void;
  /** Id of the section currently in view, if any. */
  activeId?: string | null;
}

const Navigation: React.FC<NavigationProps> = ({
  id,
  isOpen,
  onNavigate,
  activeId,
}) => (
  <nav
    id={id}
    aria-label="Main"
    className={`${styles.nav} ${isOpen ? styles.open : ""}`}
  >
    <ol className={styles.navList}>
      {navItems.map((item) => (
        <li key={item.href} className={styles.navItem}>
          <NavLink
            href={item.href}
            onClick={onNavigate}
            isActive={item.href.endsWith(`#${activeId}`)}
          >
            <span className={styles.navIndex}>{item.number}.</span>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ol>
    <a
      className={styles.resume}
      href={asset(resume.file)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onNavigate}
    >
      {resume.label}
    </a>
  </nav>
);

export default Navigation;
