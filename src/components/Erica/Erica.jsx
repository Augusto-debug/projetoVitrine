import React from "react";
import styles from "./Erica.module.css";

const Erica = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section id="erica" className={styles.ericaContainer}>
            <div className={styles.ericaInner}>
                <h1 className={styles.ericaTitle}>A Essência da Érica</h1>

                <div className={styles.ericaContent}>
                    <div className={styles.ericaImage}>
                        <img src="/imgHeroSection.jpg" alt="Érica - Vitrine Uberlândia" />
                    </div>

                    <div className={styles.ericaText}>
                        <p className={styles.ericaDetails}>
                            Sou especialista em Marketing Digital, apaixonada por histórias de vida e por criar conexões que inspiram e transformam. Acredito na força de um trabalho com propósito, feito ao lado de pessoas honestas, dedicadas e movidas pelo amor ao que fazem.
                        </p>
                        <p className={styles.ericaDetails}>
                            Com criatividade, estratégia e um atendimento verdadeiramente personalizado, meu propósito é construir conexões autênticas entre pessoas e negócios, gerando resultados reais e duradouros.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Erica;