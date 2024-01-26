import styles from "./anuncio.module.scss";

export function Anuncio() {
  return (
    <div className={styles.anuncio}>
      <h1>Reabertura</h1>
      <p className={styles["titulo-p"]}>Smart Fit</p>

      <div className={styles.div} />

      <p>
        O horário de funcionamento das nossas unidades está seguindo os decretos
        de cada município. Por isso,confira aqui se a sua unidade está aberta e
        as medidas de segurança que estamos seguindo
      </p>
    </div>
  );
}
