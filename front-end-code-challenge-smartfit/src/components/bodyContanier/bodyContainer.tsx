import { Anuncio } from "../anuncio/anuncio";
import styles from "./bodyContainer.module.scss";
export function BodyContainer() {
  return (
    <div className={styles.Container}>
      <Anuncio />
    </div>
  );
}
