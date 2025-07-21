import React from 'react';
import CardDepoimentos from './CardDepoimentos.jsx';
import { depoimentos } from './DadosDepoimentos.js';
import style from './SecaoDepoimentos.module.css';
import Apresentacao from '../Apresentacao.jsx';
import Animacao from '../tools/Animacao.jsx';

const SecaoDepoimentos = () => {
  return (
    <section id="depoimentos" className={style.secaoDepoimentos}>
      <div className={style.conteudoDepoimentos}>
        <div className={style.apresentacaoSecao}>
          <Apresentacao
            tituloSecao="O que nossos parceiros dizem"
            paragrafoSecao="A opinião de quem já colheu resultados mostra o impacto real da nossa divulgação"
          />
        </div>
        <div className={style.containerImagemDepoimentos}>
          <div>
            <img
              src="/erica4.jpg"
              alt="Consultora"
              className={style.imagemConsultora}
            />
          </div>
          <div>
            {depoimentos.map((depoimento, index) => (
              <CardDepoimentos
                key={index}
                depoimento={depoimento.depoimento}
                nome={depoimento.nome}
                avatar={depoimento.avatar}
              />
            ))}
          </div>
        </div>
      </div>

      <Animacao css_identifier={`.${style.containerImagemDepoimentos}`} efeito="esquerda" />

    </section>
  );
};

export default SecaoDepoimentos;