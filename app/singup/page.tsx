"use client";
import { Button, Header, Input, PasswordInput } from "../interface";
// @ts-expect-error
import { useFormState } from "react-dom";
import { actionSingUp } from "./action";
export default function SingUp() {
  const [state, formAction] = useFormState(actionSingUp, 0);

  return (
    <>
      <div className="flex flex-col items-center  py-10 dark:bg-grayBackground h-screen">
        <h1 className="dark:text-white text-[1.6rem]">Cadastro</h1>
        <form action={formAction} className=" flex flex-col w-80 gap-2">
          <Input
            label="Nome de usuário"
            name="name"
            error={state?.fieldErrors}
          />
          <Input label="Email" name="email" error={state?.fieldErrors} />
          <PasswordInput
            label="Senha"
            name="password"
            error={state?.fieldErrors}
          />
          <Button>Cadastrar</Button>
        </form>
      </div>
    </>
  );
}
