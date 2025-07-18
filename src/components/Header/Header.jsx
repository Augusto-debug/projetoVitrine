import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
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
    <header className={styles.headerFullWidth}>
      <div className={styles.headerContainer}>
        <div className={styles.logoWrapper}>
          <img src="/ericaLogo.svg" alt="logo" />
        </div>

        <nav className={`${styles.navHeader} ${isMenuOpen ? styles.active : ""}`}>
          <ul>
            <li>
              <a href="/" onClick={(e) => scrollToSection("erica", e)}>
                Sobre
              </a>
            </li>
            <li>
              <a href="/" onClick={(e) => scrollToSection("metricas", e)}>
                Métricas
              </a>
            </li>
            <li>
              <a href="/" onClick={(e) => scrollToSection("divulgacoes", e)}>
                Divulgações
              </a>
            </li>
            <li>
              <a href="/" onClick={(e) => scrollToSection("parceiros", e)}>
                Parcerias
              </a>
            </li>
            <li>
              <a href="/" onClick={(e) => scrollToSection("depoimentos", e)}>
                Depoimentos
              </a>
            </li>
            <li>
              <a href="/" onClick={(e) => scrollToSection("faq", e)}>
                Perguntas
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.contactButtonWrapper}>
          <a
            href="/"
            onClick={(e) => scrollToSection("faleConosco", e)}
            className={`${styles.contactButton} btn-primary`}
          >
            Seja um parceiro!
          </a>
        </div>

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