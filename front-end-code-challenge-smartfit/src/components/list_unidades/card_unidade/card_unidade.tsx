import Image from "next/image";
import styles from "./card_unidade.module.scss";
import { legenda } from "@/components/legenda";
export function CardUnidade() {
  return (
    <div className={styles.Container}>
      <span>Aberto</span>

      <p>Vicente Linhares</p>
      <span>Dom Severino, 1733 Fátima Teresina, PI</span>

      <ul>
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

      <ul>
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
