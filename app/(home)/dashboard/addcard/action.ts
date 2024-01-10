export function actionCard(previousState: any, formData: FormData) {
  let data = {};
  for (let key of formData.keys()) {
    data = { ...data, [key]: formData.get(key) };
  }

  return data;
}
