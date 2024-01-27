import { UseFormRegisterReturn } from "react-hook-form";
import style from "./inputHorario.module.scss";

interface RadioButtonsProps {
  value: string;
  funcionamento: string;
  register: UseFormRegisterReturn;
  alt: string;
}

export function RadioButtons({
  value,
  funcionamento,
  register,
  alt,
}: RadioButtonsProps) {
  return (
    <div className={style.Horario}>
      <ul>
        <input {...register} type="radio" value={value} alt={alt} />
        <p>{value}</p>
      </ul>

      <p>{funcionamento}</p>
    </div>
  );
}
