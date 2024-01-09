"use client";
import { Flame } from "lucide-react";
import { weekDay } from "../..";

interface IWeek {
  name: string;
}
const optionsData = [
  { value: 0, name: "Domingo" },
  { value: 1, name: "Segunda" },
  { value: 2, name: "Terça" },
  { value: 3, name: "quarta" },
  { value: 4, name: "Quinta" },
  { value: 5, name: "Sexta" },
  { value: 6, name: "Sabado" },
  { value: 7, name: "Todos" },
];
export function ChangeWeek({ name }: IWeek) {
  const day = weekDay();
  function dayValue(e: any) {
    console.log(e.target.value);
  }
  return (
    <>
      <section className="w-full ">
        <div className="flex justify-between">
          <h2 className="text-2xl">{name}</h2>
          <div className="flex gap-2 items-center">
            <Flame />
            <h2 className="text-lg">0000,00</h2>
          </div>
          <div className="flex items-center gap-1">
            <select
              className="bg-transparent text-2xl focus:bg-grayBackground  outline-none  w-max"
              onChange={(e) => dayValue(e)}
            >
              <option value={day.value} className="text-green-600">
                {day.name}
              </option>
              {optionsData.map(
                (keys) =>
                  keys.name != day.name && (
                    <option value={keys.value} key={keys.value}>
                      {keys.name}
                    </option>
                  )
              )}
            </select>
          </div>
        </div>
      </section>
    </>
  );
}
