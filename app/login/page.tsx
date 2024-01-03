"use client";
import { Button, Header, Input, PasswordInput } from "../interface";
// @ts-expect-error
import { useFormState } from "react-dom";
import { actionLogin } from "./action";
export default function Login() {
  const [state, formAction] = useFormState(actionLogin, 0);

  return (
    <>
      <Header />
      <section className="flex flex-col items-center  py-10 dark:bg-grayBackground h-screen">
        <h1 className="dark:text-white text-[1.6rem]">Login</h1>
        <form action={formAction} className=" flex flex-col w-80 gap-2">
          <Input label="Email" name="email" error={state?.fieldErrors} />
          <PasswordInput
            label="Senha"
            name="password"
            error={state?.fieldErrors}
          />
          <Button>Login</Button>
        </form>
      </section>
    </>
  );
}
