"use client";
// @ts-expect-error
import { useFormState } from "react-dom";
import { actionCard } from "./action";
import { Button, FormAction, Input, InputArea } from "@/app/interface";
import { useState } from "react";
import { Plus, PlusCircle, Trash } from "lucide-react";
export default function AddCard() {
  const [state, formAction] = useFormState(actionCard, 0);
  console.log(state);

  return (
    <>
      <div className="h-full  overflow-y-auto flex justify-center  ">
        <FormAction actionfn={formAction}>
          <HandleInputs />
          <WeeksSelect name="day" label="Semana" />
          <InputArea
            name="methodPreparation"
            label="Modo de preparo"
            placeholder="Opcional..."
          />
          <Button>Criar</Button>
        </FormAction>
      </div>
    </>
  );
}
function HandleInputs() {
  const [inputs, setInputs] = useState(numberInputs(1));

  function numberInputs(n: number): any {
    if (n >= 1) {
      return Array.from({ length: n }, (v, k) => k);
    }
    return Array.from({ length: 1 }, (v, k) => k);
  }

  return (
    <>
      {inputs.map((i: number) => (
        <div key={i} className="flex items-center gap-3 w-full">
          <div className="w-full">
            <Input
              label={`Ingrediente ${i}`}
              name={`ingredient${i}`}
              error={null}
              type="text"
            />
          </div>
          <div className="  w-20">
            <Input
              label={`Calorias ${i}`}
              name={`calorie${i}`}
              error={null}
              type="number"
            />
          </div>
          <div className="flex gap-2 h-16 items-center pt-3">
            <PlusCircle
              size={22}
              className="hover:text-green-600"
              onClick={() => setInputs(numberInputs(inputs.length + 1))}
            />
            <Trash
              size={22}
              className="hover:text-red-600"
              onClick={() => setInputs(numberInputs(inputs.length - 1))}
            />
          </div>
        </div>
      ))}
    </>
  );
}
interface IWeekSelect {
  name: string;
  label: string;
}
const optionsDays = [
  { value: 0, name: "Domingo" },
  { value: 1, name: "Segunda" },
  { value: 2, name: "Terça" },
  { value: 3, name: "quarta" },
  { value: 4, name: "Quinta" },
  { value: 5, name: "Sexta" },
  { value: 6, name: "Sabado" },
];
function WeeksSelect({ name, label }: IWeekSelect) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className=" font-normal text-sm dark:text-white">
          {label}
        </label>
        <select
          name={name}
          id={name}
          className="bg-transparent text-2xl focus:bg-grayBackground  outline-none  w-max text-green-400"
          required
        >
          <option value="" defaultChecked>
            Selecione um dia
          </option>
          {optionsDays.map((key) => (
            <>
              <option key={key.name} value={key.value}>
                {key.name}
              </option>
            </>
          ))}
        </select>
      </div>
    </>
  );
}
