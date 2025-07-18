import React from 'react'
import style from './Divulgacoes.module.css'
import Apresentacao from '../Apresentacao'

const Parceiros = () => {
  return (
    <section id='parcerias' className={style.partnersContainer}>
      <div className={style.partnersContent}>
        <Apresentacao
          tituloSecao="Sua marca na vitrine"
          paragrafoSecao="Destaque o melhor da sua marca: alcance, engajamento e conexões no instagram." />


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
            <img src="/fn-cortinas.png" alt="FN Cortes" />
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
  )
}

export default Parceiros
