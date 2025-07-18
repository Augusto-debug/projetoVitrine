import React from "react";
import style from "./SecaoMetricas.module.css";
import MetricasUmDefault from "./MetricasUmDefault/MetricasUmDefault.jsx";
import MetricasDoisDefault from "./MetricasDoisDefault/MetricasDoisDefault.jsx";


const SecaoMetricas = () => {
  return (
    <section id="metricas" className={style.secaoMetricas}>

      <div className={style.conteudoMetricas}>

        <h2>Métricas</h2>
        <p>"Números que conectam: veja como impactamos pessoas e ampliamos o alcance da sua marca.</p>

        <div className={style.containerMetricas}>
          <div className={style.metricasTipoUm}>
            <MetricasUmDefault
              textoMetrica="Seguidores"
              numerosMetrica="6.1K" />
            <MetricasUmDefault
              textoMetrica="Alcance"
              numerosMetrica="32K" />
            <MetricasUmDefault
              textoMetrica="Impressões"
              numerosMetrica="88K" />
            <MetricasUmDefault
              textoMetrica="Stories"
              numerosMetrica="4K" />
          </div>
          <div className={style.metricasTipoDois}>
            <MetricasDoisDefault
              textoMetrica="Uberlândia"
              numerosMetrica={76} />

            <MetricasDoisDefault
              textoMetrica="Mulher"
              numerosMetrica={75} />
          </div>
        </div>
      </div>





    </section>
  );
};

export default SecaoMetricas;
