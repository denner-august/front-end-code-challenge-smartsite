"use client";
import styles from "./horario.module.scss";
import Image from "next/image";
import relogioIcon from "@/./../public/images/icon-hour.png";
import { Formulario } from "../Form/Form";

export function Horario() {
  return (
    <section className={styles.Container}>
      <div>
        <Image
          src={relogioIcon}
          alt="imagem de relogio"
          height={30}
          blurDataURL={"@/./../public/images/icon-hour.png"}
        />
        <p>horário</p>
      </div>

      <h2>qual periodo quer treinar?</h2>

      <Formulario />
    </section>
  );
}
