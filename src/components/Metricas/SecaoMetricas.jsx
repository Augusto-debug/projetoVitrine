
import React, { useState, useEffect, useRef } from "react";
import style from "./SecaoMetricas.module.css";
import MetricasUmDefault from "./MetricasUmDefault/MetricasUmDefault.jsx";
import MetricasDoisDefault from "./MetricasDoisDefault/MetricasDoisDefault.jsx";
import Animacao from "../tools/Animacao.jsx";

const SecaoMetricas = () => {
  const [estaVisivel, setEstaVisivel] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Só dispara quando está realmente visível e intersectando
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) { // Mudança: reduzir de 0.5 para 0.3
          setEstaVisivel(true);
          // Para de observar após disparar uma vez
          observer.disconnect();
        }
      },
      {
        threshold: [0.1, 0.3, 0.5], // Mudança: múltiplos thresholds para melhor detecção
        rootMargin: '0px 0px -50px 0px' // Mudança: reduzir de -100px para -50px
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
        <div className={style.apresentacaoSecaoMetricas}>
          <h2>Nossa força no Instagram</h2>
          <p>Uma audiência que gera resultados para sua marca</p>
        </div>

        <div className={style.containerMetricas}>
          <div className={style.metricasTipoUm}>
            <div>
              <h3>Métricas</h3>
            </div>
            <div className={style.metricasGrid}>
              <MetricasUmDefault
                textoMetrica="Seguidores"
                legenda="Seguidores do nosso perfil do instagram"
                valorAlvo={6100}
                iniciarAnimacao={estaVisivel} />
              <MetricasUmDefault
                textoMetrica="Alcance"
                legenda="Contas que visualizaram nosso conteúdo"
                valorAlvo={32000}
                iniciarAnimacao={estaVisivel} />
              <MetricasUmDefault
                textoMetrica="Impressões"
                legenda="Exibição do nosso conteúdo em tela"
                valorAlvo={88000}
                iniciarAnimacao={estaVisivel} />
              <MetricasUmDefault
                textoMetrica="Stories"
                legenda="Visualizações dos nossos stories"
                valorAlvo={4000}
                iniciarAnimacao={estaVisivel} />
            </div>
          </div>
          <div className={style.metricasTipoDois}>
            <div>
              <h3>Nosso Público</h3>
            </div>
            <div className={style.graficosGrid}>
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

      <Animacao css_identifier={`.${style.containerMetricas}`} efeito="esquerda" />

    </section>
  );
};

export default SecaoMetricas;
