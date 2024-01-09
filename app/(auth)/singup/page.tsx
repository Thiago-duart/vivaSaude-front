"use client";
// @ts-expect-error
import { useFormState } from "react-dom";
import { actionSingUp } from "./action";
import { Button, FormAction, Input, PasswordInput } from "@/app/interface";
export default function SingUp() {
  const [state, formAction] = useFormState(actionSingUp, 0);

  return (
    <>
      <div className="flex flex-col items-center  py-10 h-screen">
        <h1 className="text-[1.6rem]">Cadastro</h1>
        <FormAction actionfn={formAction}>
          <Input
            label="Nome de usuário"
            name="name"
            error={state?.fieldErrors}
            type="text"
          />
          <Input
            label="Email"
            name="email"
            error={state?.fieldErrors}
            type="text"
          />
          <PasswordInput
            label="Senha"
            name="password"
            error={state?.fieldErrors}
          />
          <Button>Cadastrar</Button>
        </FormAction>
      </div>
    </>
  );
}
