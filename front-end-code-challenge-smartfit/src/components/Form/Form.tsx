import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { RadioButtons } from "../horarioContainer/InputHorario/inputHorario";

export function Formulario() {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      Horario: "",
      UnidadesFechadas: false,
    },
  });

  function Limpar() {
    setValue("Horario", "");
    setValue("UnidadesFechadas", false);
  }

  return (
    <form
      onSubmit={handleSubmit((e) => console.log(e))}
      className={styles.Container}
    >
      <RadioButtons
        register={register("Horario")}
        value="Manhã"
        funcionamento="06:00 às 12:00"
        alt="Manhã"
      />
      <RadioButtons
        register={register("Horario")}
        value="Tarde"
        funcionamento="12:01 às 18:00"
        alt="Tarde"
      />
      <RadioButtons
        register={register("Horario")}
        value="Noite"
        funcionamento="18:01 às 23:00"
        alt="Noite"
      />

      <div className={styles.Unidades}>
        <div>
          <input
            {...register("UnidadesFechadas")}
            type="checkbox"
            value={"true"}
          />
          <p>Exibir unidades fechadas</p>
        </div>

        <p>
          Resultados encontrados: <span>0</span>
        </p>
      </div>

      <div className={styles.buttons}>
        <input type="submit" value=" Encontrar unidade" />
        <button onClick={Limpar}>Limpar</button>
      </div>
    </form>
  );
}
