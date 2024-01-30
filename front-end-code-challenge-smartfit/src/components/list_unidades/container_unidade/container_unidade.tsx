import { CardUnidade } from "../card_unidade/card_unidade";
import style from "./container_unidade.module.scss";

export function ContainerUnidade() {
  return (
    <div className={style.Container}>
      <CardUnidade />
    </div>
  );
}
