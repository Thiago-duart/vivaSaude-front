"use client";
import { ChefHat, Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../..";

export function Header() {
  const { useTheme, theme, setTheme } = useContext(ThemeContext);
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
            <div>
              {theme == "dark" ? (
                <Sun
                  size={18}
                  onClick={() => {
                    useTheme(), setTheme("light");
                  }}
                />
              ) : (
                <Moon
                  color="white"
                  size={18}
                  onClick={() => {
                    useTheme(), setTheme("dark");
                  }}
                />
              )}
            </div>
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
