"use client";
import { ChefHat } from "lucide-react";
import { ChangeTheme, MyLink } from "../..";

export function Header() {
  return (
    <>
      <header className="flex items-center  h-16 px-8 bg-ligthHeader dark:bg-darkHeader text-white text-[1rem]">
        <nav className="flex  justify-between w-full cursor-pointer">
          <div className="flex gap-6 items-center">
            <MyLink href="./">
              <div className="flex items-center gap-2">
                <ChefHat color="white" size={26} />
                <p className="font-bold">VivaSaude</p>
              </div>
            </MyLink>
            <div>
              <p>Recursos</p>
            </div>
            <div>
              <p>Soluções</p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <ChangeTheme />
            <MyLink href="./login">
              <p>Login</p>
            </MyLink>
            <MyLink href="./singup">
              <div>Cadastrar</div>
            </MyLink>
          </div>
        </nav>
      </header>
    </>
  );
}
