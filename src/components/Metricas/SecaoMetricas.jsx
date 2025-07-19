
import React, { useState, useEffect, useRef } from "react";
import style from "./SecaoMetricas.module.css";
import MetricasUmDefault from "./MetricasUmDefault/MetricasUmDefault.jsx";
import MetricasDoisDefault from "./MetricasDoisDefault/MetricasDoisDefault.jsx";


const SecaoMetricas = () => {
  const [estaVisivel, setEstaVisivel] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Só dispara quando está realmente visível e intersectando
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setEstaVisivel(true);
          // Para de observar após disparar uma vez
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Dispara quando 50% da seção está visível
        rootMargin: '0px 0px -100px 0px' // Adiciona margem para disparar mais tarde
      }
    );

    // Pequeno delay para garantir que o elemento está renderizado
    const timeoutId = setTimeout(() => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);



  return (
    <section id="metricas" className={style.secaoMetricas} ref={sectionRef}>

      <div className={style.conteudoMetricas}>

        <h2>Nossa força no Instagram</h2>
        <p>Uma audiência que gera  resultados para sua marca</p>

        <div className={style.containerMetricas}>
          <div className={style.metricasTipoUm}>
            <div>
              <h3>Métricas</h3>

            </div>
            <div className={style.metricasGrid}>
              <MetricasUmDefault
                textoMetrica="Seguidores"
                valorAlvo={6100}
                iniciarAnimacao={estaVisivel} />
              <MetricasUmDefault
                textoMetrica="Alcance"
                valorAlvo={32000}
                iniciarAnimacao={estaVisivel} />
              <MetricasUmDefault
                textoMetrica="Impressões"
                valorAlvo={88000}
                iniciarAnimacao={estaVisivel} />
              <MetricasUmDefault
                textoMetrica="Stories"
                valorAlvo={4000}
                iniciarAnimacao={estaVisivel} />
            </div>

          </div>
          <div className={style.metricasTipoDois}>
            <div>
              <h3>Nosso Público</h3>
            </div>
            <div className={style.metricasGrid}>
              <MetricasDoisDefault
                textoMetrica="Uberlândia"
                numerosMetrica={76}
                iniciarAnimacao={estaVisivel} />

              <MetricasDoisDefault
                textoMetrica="Mulheres"
                numerosMetrica={75}
                iniciarAnimacao={estaVisivel} />
            </div>
          </div>
        </div>
      </div>





    </section>
  );
};

export default SecaoMetricas;
