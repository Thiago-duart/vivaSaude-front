import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Digite um email valido" }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter no minimo 8 caracteres" })
    .max(120, { message: "A senha deve ter no maximo 120 caracteres" }),
});
