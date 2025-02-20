"use client";

import React, { useState } from "react";
import Logo from "../../atoms/Logo/Logo";
import Navigation from "../../molecules/Navigation/Navigation";
import Button from "../../atoms/Button/Button";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo isMenuOpen={isMenuOpen} />
        <Button
          onClick={toggleMenu}
          ariaLabel="Toggle menu"
          isOpen={isMenuOpen}
        />
        <Navigation isOpen={isMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
