"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Logo from "../../atoms/Logo/Logo";
import Navigation from "../../molecules/Navigation/Navigation";
import Button from "../../atoms/Button/Button";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import useActiveSection from "@/hooks/useActiveSection";
import { navItems } from "@/utils/mocks/data";

const MENU_ID = "site-menu";
/* Must match the 768px breakpoint in Navigation.module.css and Button.module.css. */
const DESKTOP_QUERY = "(min-width: 769px)";
const SECTION_IDS = navItems.map((item) => item.href.split("#")[1]);
const WORK_ID = "work";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const pathname = usePathname();
  const activeSection = useActiveSection(SECTION_IDS, pathname);
  /* Case-study pages live under Work, so that link stays lit there. */
  const activeId = pathname.startsWith("/projects") ? WORK_ID : activeSection;

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        buttonRef.current?.focus();
      }
    };

    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);

    return () => {
      body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo onClick={closeMenu} />
        <Button
          ref={buttonRef}
          onClick={() => setIsMenuOpen((open) => !open)}
          ariaLabel="Menu"
          isOpen={isMenuOpen}
          controls={MENU_ID}
        />
        <Navigation
          id={MENU_ID}
          isOpen={isMenuOpen}
          onNavigate={closeMenu}
          activeId={activeId}
        />
      </div>
    </header>
  );
};

export default Header;
