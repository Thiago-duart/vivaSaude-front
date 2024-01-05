import { useParse } from "@/app/interface/components/hooks/useParse";
import { singUpSchema } from "./schema/singUp-schema";

export async function actionSingUp(previousState: any, formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const responseParse = useParse(singUpSchema, data);

  return responseParse;
}
