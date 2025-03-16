import React from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons from Feather icon set
import styles from "./Button.module.css";

interface ButtonProps {
  onClick: () => void;
  ariaLabel: string;
  isOpen: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, ariaLabel, isOpen }) => (
  <button className={styles.button} onClick={onClick} aria-label={ariaLabel}>
    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
  </button>
);

export default Button;
