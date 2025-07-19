import style from './MetricasUmDefault.module.css';
import useContador from '../Hooks/useCounter';

function MetricasUmDefault({ textoMetrica, valorAlvo, iniciarAnimacao }) {
  const contador = useContador(valorAlvo, 2000, iniciarAnimacao);

  const formatarNumero = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + ' K';
    }
    return num.toString();
  };

  return (
    <div className={style.metricaUnica}>
      <h4>{textoMetrica}</h4>
      <span>{formatarNumero(contador)}</span>
    </div>
  );
}

export default MetricasUmDefault;