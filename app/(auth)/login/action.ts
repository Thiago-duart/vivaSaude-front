import { useParse } from "@/app/interface/components/hooks/useParse";
import { loginSchema } from "./schema/login-schema";

export async function actionLogin(previousState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const responseParse = useParse(loginSchema, data);

  return responseParse;
}
