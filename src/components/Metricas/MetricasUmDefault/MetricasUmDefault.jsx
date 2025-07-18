import style from './MetricasUmDefault.module.css';

function MetricasUmDefault({ textoMetrica, numerosMetrica }) {
  return (
    <div className={style.metricaUnica}>
      <p>{textoMetrica}</p>
      <span>{numerosMetrica}</span>
    </div>

  );
}

export default MetricasUmDefault;