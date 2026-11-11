import React from "react";
import Link from "next/link";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  className,
}) => (
  <Link
    href={href}
    className={className ? `${styles.button} ${className}` : styles.button}
  >
    {children}
  </Link>
);

export default LinkButton;
