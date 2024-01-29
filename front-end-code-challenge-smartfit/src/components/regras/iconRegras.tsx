import MascaraObrigatoria from "@/../public/images/required-mask.png";
import MascaraRecomendada from "@/../public/images/recommended-mask.png";

import ToalhaObrigatoria from "@/../public/images/required-towel.png";
import ToalhaRecomendada from "@/../public/images/recommended-towel.png";

import BebedouroRecomendada from "@/../public/images/forbidden-fountain.png";
import BebedouroObrigatoria from "@/../public/images/partial-fountain.png";

import VestiarioObrigatorio from "@/../public/images/required-lockerroom.png";
import VestiarioRecomendada from "@/../public/images/partial-lockerroom.png";
import VestiarioFechado from "@/../public/images/forbidden-lockerroom.png";

export const iconsRegras = {
  Mascara: {
    titulo: "Máscara",
    imagem1: MascaraObrigatoria,
    imagem2: MascaraRecomendada,
    alt: "Máscara",
    recomendado1: "Obrigatório",
    recomendado2: "Recomendado",
  },
  Toalha: {
    titulo: "Toalha",
    imagem1: ToalhaObrigatoria,
    imagem2: ToalhaRecomendada,
    alt: "Toalha",
    recomendado1: "Obrigatório",
    recomendado2: "Recomendado",
  },
  Bebedouro: {
    titulo: "Bebedouro",
    imagem1: BebedouroObrigatoria,
    imagem2: BebedouroRecomendada,
    alt: "Bebedouro",
    recomendado1: "Obrigatório",
    recomendado2: "Recomendado",
  },
  Vestiario: {
    titulo: "Vestiario",
    imagem1: VestiarioObrigatorio,
    imagem2: VestiarioRecomendada,
    imagem3: VestiarioFechado,
    alt: "Vestiario",
    recomendado1: "Obrigatório",
    recomendado2: "Recomendado",
  },
};
