"use client";
import { ChefHat } from "lucide-react";
import { ChangeTheme } from "../..";

export function Header() {
  return (
    <>
      <header className="flex items-center  h-16 px-8 bg-ligthHeader dark:bg-darkHeader text-white text-[0.75rem]">
        <nav className="flex  justify-between w-full cursor-pointer">
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2">
              <ChefHat color="white" size={26} />
              <p className="font-bold">VivaSaude</p>
            </div>
            <div>
              <p>Recursos</p>
            </div>
            <div>
              <p>Soluções</p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <ChangeTheme />
            <div>
              <p>Login</p>
            </div>
            <div>Cadastrar</div>
          </div>
        </nav>
      </header>
    </>
  );
}
