import MascaraObrigatoria from "@/../public/images/required-mask.png";
import MascaraRecomendada from "@/../public/images/recommended-mask.png";

import ToalhaObrigatoria from "@/../public/images/required-towel.png";
import ToalhaRecomendada from "@/../public/images/recommended-towel.png";

import BebedouroObrigatoria from "@/../public/images/partial-fountain.png";
import BebedouroRecomendada from "@/../public/images/forbidden-fountain.png";

import VestiarioObrigatorio from "@/../public/images/required-lockerroom.png";
import VestiarioRecomendada from "@/../public/images/partial-lockerroom.png";
import VestiarioFechado from "@/../public/images/forbidden-lockerroom.png";

export const legenda = {
  Mask: {
    title: "Máscara",
    alt: "Máscara",
    required: {
      image: MascaraObrigatoria,
      title: "Obrigatorio",
    },
    recommended: {
      image: MascaraRecomendada,
      title: "Recomendado",
    },
  },

  towel: {
    title: "Toalha",
    alt: "Toalha",
    required: {
      image: ToalhaObrigatoria,
      title: "Obrigatória",
    },
    recommended: {
      image: ToalhaRecomendada,
      title: "Recomendado",
    },
  },

  fountain: {
    title: "Bebedouro",
    alt: "Bebedouro",
    required: {
      image: BebedouroObrigatoria,
      title: "Obrigatória",
    },
    recommended: {
      image: BebedouroRecomendada,
      title: "Recomendado",
    },
  },
  locker_room: {
    title: "Vestiario",
    alt: "Vestiario",
    required: {
      image: VestiarioObrigatorio,
      title: "Obrigatória",
    },
    recommended: {
      image: VestiarioRecomendada,
      title: "Recomendado",
    },
    not_allowed: {
      image: VestiarioFechado,
      title: "Fechado",
    },
  },
};
