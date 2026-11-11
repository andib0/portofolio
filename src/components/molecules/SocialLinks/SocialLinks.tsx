import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./SocialLinks.module.css";
import { site } from "@/utils/mocks/data";

const links = [
  { href: site.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: site.github, label: "GitHub", Icon: FaGithub },
  { href: site.instagram, label: "Instagram", Icon: FaInstagram },
];

interface SocialLinksProps {
  direction?: "row" | "column";
}

const SocialLinks: React.FC<SocialLinksProps> = ({ direction = "row" }) => (
  <ul
    className={`${styles.list} ${direction === "column" ? styles.column : ""}`}
  >
    {links.map(({ href, label, Icon }) => (
      <li key={href}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={styles.link}
        >
          <Icon size={18} aria-hidden="true" />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
