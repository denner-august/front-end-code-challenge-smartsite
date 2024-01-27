import { Anuncio } from "../anuncio/anuncio";
import { Horario } from "../horarioContainer/horarios";
import styles from "./bodyContainer.module.scss";
export function BodyContainer() {
  return (
    <div className={styles.Container}>
      <Anuncio />
      <Horario />
    </div>
  );
}
