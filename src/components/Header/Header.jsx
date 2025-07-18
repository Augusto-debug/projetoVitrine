import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div>
          <img src="/ericaLogo.svg" alt="logo" />
        </div>

        <nav className={`${styles.navHeader} ${isMenuOpen ? styles.active : ""}`}>
          <ul>
          <li>
              <a href="#parcerias" onClick={() => scrollToSection("parcerias")}>
                Divulgações
              </a>
            </li>
            <li>
              <a href="#metricas" onClick={() => scrollToSection("metricas")}>
                Métricas
              </a>
            </li>
            <li>
              <a
                href="#depoimentos"
                onClick={() => scrollToSection("depoimentos")}
              >
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#parceiros" onClick={() => scrollToSection("parceiros")}>
                Parcerias
              </a>
            </li>
            <li>
              <a href="#faq" onClick={() => scrollToSection("faq")}>
                FAQ
              </a>
            </li>
            <li>
              <a 
                href="#faleConosco" 
                onClick={() => scrollToSection("faleConosco")}
                className={styles.contactButton}
              >
                Seja um parceiro!
              </a>
            </li>
          </ul>
        </nav>

        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
