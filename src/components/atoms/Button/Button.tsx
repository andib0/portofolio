import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick: () => void;
  ariaLabel: string;
  isOpen: boolean;
  controls: string;
  ref?: React.Ref<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  ariaLabel,
  isOpen,
  controls,
  ref,
}) => (
  <button
    ref={ref}
    type="button"
    className={styles.button}
    onClick={onClick}
    aria-label={ariaLabel}
    aria-expanded={isOpen}
    aria-controls={controls}
  >
    {isOpen ? (
      <FiX size={24} aria-hidden="true" />
    ) : (
      <FiMenu size={24} aria-hidden="true" />
    )}
  </button>
);

export default Button;
