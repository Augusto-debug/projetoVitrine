import style from './MetricasUmDefault.module.css';

function MetricasUmDefault({ textoMetrica, numerosMetrica }) {
  return (
    <div className={style.metricaUnica}>
      <h3>{textoMetrica}</h3>
      <span>{numerosMetrica}</span>
    </div>

  );
}

export default MetricasUmDefault;