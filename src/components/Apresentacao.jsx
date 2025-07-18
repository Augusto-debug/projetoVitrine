import style from './Apresentacao.module.css';

const Apresentacao = ({ tituloSecao, paragrafoSecao }) => {
    return (
        <div className={style.apresentacao}>
            <h3>{tituloSecao}</h3>
            {paragrafoSecao && <p>{paragrafoSecao}</p>}        </div>
    );
}

export default Apresentacao;