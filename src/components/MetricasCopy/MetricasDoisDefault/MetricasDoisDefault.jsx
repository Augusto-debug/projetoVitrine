import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import style from "./MetricasDoisDefault.module.css";

ChartJS.register(ArcElement);

const MetricasDoisDefault = ({ textoMetrica, numerosMetrica, iniciarAnimacao }) => {
  const [porcentagemAtual, setPorcentagemAtual] = useState(0);

  useEffect(() => {
    if (!iniciarAnimacao) {
      setPorcentagemAtual(0);
      return;
    }

    let startTime;
    let animationFrame;
    const duration = 2000; // 2 segundos

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const novaPorcentagem = Math.floor(numerosMetrica * easeOutQuart);
      
      setPorcentagemAtual(novaPorcentagem);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setPorcentagemAtual(numerosMetrica);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [numerosMetrica, iniciarAnimacao]);

  const data = {
    datasets: [
      {
        data: [porcentagemAtual, 100 - porcentagemAtual],
        backgroundColor: ["#7c0000", "#e2a8a8"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className={style.containerAlcance}>
      <h4>{textoMetrica}</h4>
      <div className={style.wrapper}>
        <Doughnut data={data} options={options} />
        <div className={style.valorCentro}>
          <span>{porcentagemAtual}%</span>
        </div>
      </div>
    </div>
  );
};

export default MetricasDoisDefault;