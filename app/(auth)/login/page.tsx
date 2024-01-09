"use client";
// @ts-expect-error
import { useFormState } from "react-dom";
import { actionLogin } from "./action";
import {
  Button,
  FormAction,
  Input,
  MyLink,
  PasswordInput,
} from "@/app/interface";
export default function Login() {
  const [state, formAction] = useFormState(actionLogin, 0);

  return (
    <>
      <div className="flex flex-col items-center  py-10 dark:bg-grayBackground h-screen">
        <h1 className="dark:text-white text-[1.6rem]">Login</h1>
        <FormAction actionfn={formAction}>
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
          <Button>Login</Button>
        </FormAction>
        <div className="flex flex-col gap-2 justify-center mt-8 dark:text-white  text-sm font-normal items-center">
          <div className="flex gap-2">
            <p>Ainda não possui conta?</p>
            <MyLink href="./singup">
              <p className="text-blue-600">Cadastre-se aqui</p>
            </MyLink>
          </div>
          <div className="flex gap-2">
            <p>Esqueceu sua senha?</p>
            <MyLink href="https://www.youtube.com/">
              <p className="text-blue-600">Click aqui.</p>
            </MyLink>
          </div>
        </div>
      </div>
    </>
  );
}
