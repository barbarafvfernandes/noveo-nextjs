'use client';

import { useState } from "react";
import Link from "next/link";
import styles from "./MobileMenu.module.css";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button 
        className={`${styles.menu_btn} ${isOpen ? styles.open : ""}`} 
        onClick={toggleMenu}
        aria-label="Abrir menu de navegação"
        aria-expanded={isOpen}
      >
        <span className={styles.menu_icon}></span>
      </button>

      <nav className={`${styles.header__nav} ${isOpen ? styles.nav_open : ""}`}>
        <Link href="/" onClick={closeMenu}>Início</Link>
        <Link href="/filmes/em-alta" onClick={closeMenu}>Em alta</Link>
        <Link href="/filmes/populares" onClick={closeMenu}>Populares</Link>
        <Link href="/filmes/top-filmes" onClick={closeMenu}>Top Filmes</Link>
      </nav>
    </>
  );
}
