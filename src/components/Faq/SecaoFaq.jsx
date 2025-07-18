import React, { useEffect, useState } from "react";
import style from "./SecaoFaq.module.css";

const url = "https://augusto-debug.github.io/projetoVitrineUberlandia/src/req.json";

export default function SecaoFaq() {
  const [perguntas, setPerguntas] = useState([]);
  const [indiceAtivo, setIndiceAtivo] = useState(null);

  useEffect(() => {
    const carregarPerguntas = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && Array.isArray(data.faq)) {
          setPerguntas(data.faq);
        } else {
          console.error("O formato dos dados não é esperado.");
        }
      } catch (error) {
        console.error("Erro ao carregar os dados", error);
      }
    };
    carregarPerguntas();
  }, []);

  return (
    <section id="faq" className={style.secaoFaq}>
      {/* Container centralizado */}
      <div className={style.container}>
        <h2>Perguntas frequentes</h2>

        <div className={style.perguntasContainer}>
          {perguntas.map((item, index) => (
            <button
              key={index}
              onClick={() => setIndiceAtivo(indiceAtivo === index ? null : index)}
              className={`${style.perguntaBtn} ${indiceAtivo === index ? style.ativo : ""}`}
              aria-expanded={indiceAtivo === index}
              aria-controls={`resposta-${index}`}
              id={`pergunta-${index}`}
            >
              {item.pergunta}
            </button>
          ))}
        </div>

        <div
          className={style.respostaContainer}
          style={{ height: indiceAtivo === null ? 0 : "auto" }}
        >
          {perguntas.map((item, index) => (
            <div
              key={index}
              id={`resposta-${index}`}
              role="region"
              aria-labelledby={`pergunta-${index}`}
              className={`${style.resposta} ${indiceAtivo === index ? style.mostrar : style.esconder}`}
            >
              {item.resposta}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}