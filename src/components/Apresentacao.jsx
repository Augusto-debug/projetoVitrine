import style from './Apresentacao.module.css';

const Apresentacao = ({ tituloSecao, paragrafoSecao }) => {
    return (
        <div className={style.apresentacao}>
            <h2>{tituloSecao}</h2>
            {paragrafoSecao && <p>{paragrafoSecao}</p>}
        </div>
    );
}

export default Apresentacao;