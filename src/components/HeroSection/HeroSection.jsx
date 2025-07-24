import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const anoInicial = 2018;
  const anoAtual = new Date().getFullYear();
  const anosDeExperiencia = anoAtual - anoInicial;

  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Vitrine Uberlândia</h1>
          <h2>Érica</h2>
          <p className="hero-description">
            Há {anosDeExperiencia} {anosDeExperiencia === 1 ? "ano" : "anos"}, impulsionando marcas, produtos e serviços em Uberlândia.
          </p>
          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => scrollToSection("faleConosco")}
            >
              Seja um parceiro!
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/foto2Editada.jpg" alt="Érica - Vitrine Uberlândia" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
