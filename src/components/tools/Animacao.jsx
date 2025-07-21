import { Fragment, useEffect } from "react";
import ScrollReveal from 'scrollreveal';

export default function Animacao({ css_identifier, efeito = "padrao" }) {

  useEffect(() => {
    const efeitos = {
      padrao: {
        duration: 1000,
        distance: "40px",
        origin: "bottom",
        easing: "ease-in-out",
        opacity: 0,
        interval: 100,
        reset: false,
        scale: 1
      },
      escala: {
        duration: 1200,
        scale: 0.9,
        opacity: 0,
        easing: "ease-out",
        reset: false
      },
      esquerda: {
        duration: 1000,
        distance: "60px",
        origin: "left",
        opacity: 0,
        easing: "ease-in-out",
        reset: false
      },
      direita: {
        duration: 1000,
        distance: "60px",
        origin: "right",
        opacity: 0,
        easing: "ease-in-out",
        reset: false
      },
      fade: {
        duration: 800,
        opacity: 0,
        distance: "0px",
        easing: "ease-in",
        reset: false
      }
    };

    const config = efeitos[efeito] || efeitos.padrao;

    ScrollReveal().reveal(css_identifier, config);
  }, [css_identifier, efeito]);

  return <Fragment />;
}
