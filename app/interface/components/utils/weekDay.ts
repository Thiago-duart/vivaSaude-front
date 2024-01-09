export function weekDay() {
  const days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ];
  const date = new Date();

  const day = days[date.getDay()];

  return { name: day, value: date.getDay() };
}
