import React from 'react';
import style from './Divulgacoes.module.css';

const Parceiros = () => {
  return (
    <section id='parcerias' className={style.partnersContainer}>
      <div className={style.partnersContent}>
        <div className={style.apresentacaoSecao}>
          <h2>Parcerias em Destaque</h2>
          <p>
            Os melhores parceiros estão aqui — e a sua marca pode ser a próxima a brilhar
          </p>
        </div>

        <div className={style.partnersGrid}>
          <div
            className={style.partnerCard}
            onClick={() => window.open('https://www.instagram.com/p/DJjj1gbNW_K/', '_blank')}
          >
            <img src="/feijoada-celinho.png" alt="Feijoada do Celinho" />
            <h3>Feijoada do Celinho</h3>
          </div>

          <div
            className={style.partnerCard}
            onClick={() => window.open('https://www.instagram.com/p/DJ6mpaxN24J/?img_index=1', '_blank')}
          >
            <img src="/fn-cortinas.png" alt="FN Cortinas" />
            <h3>FN Cortinas</h3>
          </div>

          <div
            className={style.partnerCard}
            onClick={() => window.open('https://www.instagram.com/p/DKImazfyVu2/', '_blank')}
          >
            <img src="/supermercado-abc.png" alt="Supermercado ABC" />
            <h3>SUPERMERCADO ABC</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parceiros;