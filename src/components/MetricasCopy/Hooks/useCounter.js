import { useState, useEffect } from 'react';

const useContador = (valorFinal, duracao = 2000, iniciarContagem = false) => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Reset para 0 quando iniciarContagem muda para false
    if (!iniciarContagem) {
      setContador(0);
      return;
    }

    // Garante que começa do zero
    setContador(0);
    
    let tempoInicio;
    let quadroAnimacao;

    const animar = (timestamp) => {
      if (!tempoInicio) tempoInicio = timestamp;
      const progresso = Math.min((timestamp - tempoInicio) / duracao, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progresso, 4);
      const novoContador = Math.floor(valorFinal * easeOutQuart);
      
      setContador(novoContador);

      if (progresso < 1) {
        quadroAnimacao = requestAnimationFrame(animar);
      } else {
        setContador(valorFinal);
      }
    };

    // Pequeno delay antes de iniciar a animação
    const timeoutId = setTimeout(() => {
      quadroAnimacao = requestAnimationFrame(animar);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (quadroAnimacao) {
        cancelAnimationFrame(quadroAnimacao);
      }
    };
  }, [valorFinal, duracao, iniciarContagem]);

  return contador;
};

export default useContador;