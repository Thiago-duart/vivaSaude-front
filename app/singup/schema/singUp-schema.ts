import { z } from "zod";

export const singUpSchema = z.object({
  name: z
    .string()
    .min(3, { message: "nome deve ter no minino 3 caracteres" })
    .max(50, { message: "nome deve ter no maximo 50 caracteres" }),
  email: z.string().email({ message: "Digite um email valido" }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter no minimo 8 caracteres" })
    .max(120, { message: "A senha deve ter no maximo 120 caracteres" }),
});
