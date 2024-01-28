import styles from "./regras.module.scss";
import { ComponentRegras } from "./componentRegras/componentRegras";

import { iconsRegras } from "./iconRegras";

export function Regras() {
  return (
    <section className={styles.Container}>
      <ComponentRegras
        titulo={iconsRegras.Mascara.titulo}
        alt={iconsRegras.Mascara.alt}
        imagem1={iconsRegras.Mascara.imagem1}
        imagem2={iconsRegras.Mascara.imagem2}
        recomendado1={iconsRegras.Mascara.recomendado1}
        recomendado2={iconsRegras.Mascara.recomendado2}
      />
      <ComponentRegras
        titulo={iconsRegras.Toalha.titulo}
        alt={iconsRegras.Toalha.alt}
        imagem1={iconsRegras.Toalha.imagem1}
        imagem2={iconsRegras.Toalha.imagem2}
        recomendado1={iconsRegras.Toalha.recomendado1}
        recomendado2={iconsRegras.Toalha.recomendado2}
      />
      <ComponentRegras
        titulo={iconsRegras.Bebedouro.titulo}
        alt={iconsRegras.Bebedouro.alt}
        imagem1={iconsRegras.Bebedouro.imagem1}
        imagem2={iconsRegras.Bebedouro.imagem2}
        recomendado1={iconsRegras.Bebedouro.recomendado1}
        recomendado2={iconsRegras.Bebedouro.recomendado2}
      />
      <ComponentRegras
        titulo={iconsRegras.Vestiario.titulo}
        alt={iconsRegras.Vestiario.alt}
        imagem1={iconsRegras.Vestiario.imagem1}
        imagem2={iconsRegras.Vestiario.imagem2}
        recomendado1={iconsRegras.Vestiario.recomendado1}
        recomendado2={iconsRegras.Vestiario.recomendado2}
      />
    </section>
  );
}
