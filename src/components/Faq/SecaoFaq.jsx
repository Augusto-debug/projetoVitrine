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
      <div className={style.containerFaq}>
        <h2>Perguntas frequentes</h2>

        <div className={style.menuFaq}>
          {perguntas.map((item, index) => (
            <button
              key={index}
              onClick={() =>
                setIndiceAtivo(indiceAtivo === index ? null : index)
              }
              className={`${style.perguntaBtn} ${indiceAtivo === index ? style.ativo : ""
                }`}
            >
              {item.pergunta}
            </button>
          ))}
        </div>

        {indiceAtivo !== null && (
          <div className={style.respostaArea}>
            {Array.isArray(perguntas[indiceAtivo].resposta) ? (
              <ul>
                {perguntas[indiceAtivo].resposta.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{perguntas[indiceAtivo].resposta}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
