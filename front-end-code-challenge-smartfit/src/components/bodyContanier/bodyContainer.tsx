import { Anuncio } from "../anuncio/anuncio";
import { Horario } from "../horarioContainer/horarios";
import { Regras } from "../regras/regras";
import styles from "./bodyContainer.module.scss";
export function BodyContainer() {
  return (
    <div className={styles.Container}>
      <Anuncio />
      <Horario />
      <Regras />
    </div>
  );
}
