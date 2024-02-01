"use client";
import Image from "next/image";
import styles from "./card_unidade.module.scss";
import { legenda } from "@/components/legenda";
import { useEffect, useState } from "react";

export function CardUnidade() {
  async function t() {
    const res = await fetch(
      "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
    ).then((resonse) => console.log(resonse));
  }

  useEffect(() => {
    t();
  }, []);

  const [cor, setcor] = useState(false);

  return (
    <div className={styles.Container}>
      <span style={{ color: cor === true ? "#2fbd04" : "#ff0000" }}>
        fechado
      </span>

      <p>Vicente Linhares</p>
      <span>Dom Severino, 1733 Fátima Teresina, PI</span>

      <ul className={styles.division}>
        <Image
          src={legenda.Mask.required.image}
          alt={legenda.Mask.required.title}
          height={65}
          width={65}
        />
        <Image
          src={legenda.Mask.required.image}
          alt={legenda.Mask.required.title}
          height={65}
          width={65}
        />
        <Image
          src={legenda.Mask.required.image}
          alt={legenda.Mask.required.title}
          height={65}
          width={65}
        />
        <Image
          src={legenda.Mask.required.image}
          alt={legenda.Mask.required.title}
          height={65}
          width={65}
        />
      </ul>

      <ul className={styles.semana}>
        <li>
          <p>weekdays</p>
          <span>hour</span>
        </li>
        <li>
          <p>weekdays</p>
          <span>hour</span>
        </li>
        <li>
          <p>weekdays</p>
          <span>hour</span>
        </li>
      </ul>
    </div>
  );
}
