import React from "react";
import styles from "./SecaoParceiros.module.css";

function SecaoParceiros() {
  const partners = [
    { name: "Neiva Bar", image: "/neivaBar.jpg", link: "https://www.instagram.com/p/DFDKSB7RpJW/" },
    { name: "Supermercados ABC", image: "/ABC.jpg", link: "https://www.instagram.com/p/DKImazfyVu2/" },
    { name: "Paranaíba FM", image: "/Paranaiba.jpg", link: "https://www.instagram.com/reel/DCsIFl5RiUQ/?igsh=MWpvMHY5d2JlcXU0Ng%3D%3D" },
    { name: "MG World Suplementos", image: "/MGWorld.jpg", link: "https://www.instagram.com/reel/CklIZr6At_R/?igsh=bHh0Mzg1enl6Ymtq" },
    { name: "Rota das Culturas", image: "/rotaDasCulturas.jpg", link: "https://www.instagram.com/reel/C3S05L9LPhN/?igsh=bXV5dXNmYnZtOWZz" },
    { name: "Bem de Minas", image: "/BemdeMinas.jpg", link: "https://www.instagram.com/reel/C--cmLMup8d/?igsh=aTZzbXcyZ2R0d3Bu" },
  ];

  return (
    <section id="parceiros" className={styles.secaoParceiros}>
      <div>
        <div className={styles.apresentacaoSecao}>
          <h2>Conheça mais parcerias</h2>
          <p>Conheça mais marcas que acreditaram no meu trabalho</p>
        </div>

        <div className={styles.containerParceiros}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.partnerItem}>
              <div className={styles.partnerHighlightBox}>
                <a href={partner.link} target="_blank" rel="noopener noreferrer">
                  <img src={partner.image} alt={partner.name} />
                </a>
                <p>{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecaoParceiros;
