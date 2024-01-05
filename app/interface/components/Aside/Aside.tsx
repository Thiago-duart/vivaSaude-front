"use client";
import {
  ChefHat,
  Edit,
  LogOut,
  Moon,
  SettingsIcon,
  ShoppingCart,
  Soup,
  Sun,
} from "lucide-react";
import { useContext, useState } from "react";
import { ThemeContext } from "../..";

function Settings() {
  const { useTheme, theme, setTheme } = useContext(ThemeContext);
  const active = theme == "dark" ? true : false;

  const [open, setOpen] = useState("hidden");
  // if (open === "") {
  //   setTimeout(() => {
  //     setOpen("hidden");
  //   }, 2000);
  // }
  function visible() {
    if (open === "hidden") {
      setOpen("");
    } else {
      setOpen("hidden");
    }
  }
  return (
    <>
      <div className="relative ">
        <div
          className="flex items-center gap-2 text-white  cursor-pointer "
          onClick={() => visible()}
        >
          <SettingsIcon color="white" size={"2rem"} />
          <p className="text-lg">Configurações</p>
        </div>
        <div
          className={`w-44 bg-white  ${open} absolute  right-0 rounded-lg p-3`}
        >
          <div className="flex flex-col gap-3">
            <div className="flex gap-1">
              <div
                className={`flex justify-center border-2  w-12 p-1 rounded-lg hover:border-green-600 cursor-pointer ${
                  !active ? "border-green-600" : "border-grayBoder"
                }`}
              >
                <Sun
                  onClick={() => {
                    useTheme(), setTheme("ligth");
                  }}
                />
              </div>
              <div
                className={`flex justify-center border-2  w-12 p-1 rounded-lg bg-darkHeader text-white hover:border-green-600 cursor-pointer ${
                  active ? "border-green-600" : "border-grayBoder"
                }`}
              >
                <Moon
                  onClick={() => {
                    useTheme(), setTheme("dark");
                  }}
                />
              </div>
            </div>
            <div className="flex gap-2 items-center text-red-600 cursor-pointer">
              <LogOut />
              <p>Deslogar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function Aside() {
  return (
    <>
      <div className="h-screen w-80 py-5 px-7 bg-ligthHeader dark:bg-darkHeader flex flex-col gap-16">
        <div className="flex items-center gap-2 text-white  cursor-pointer">
          <ChefHat color="white" size={36} />
          <p className="text-lg text-lime-600">Thiago</p>
        </div>
        <div>
          <nav className="flex flex-col gap-10">
            <div className="flex items-center gap-2 text-white  cursor-pointer">
              <Soup color="white" size={"2rem"} />
              <p className="text-lg">Alimentação-Dia-Dia</p>
            </div>
            <div className="flex items-center gap-2 text-white  cursor-pointer">
              <Edit color="white" size={"2rem"} />
              <p className="text-lg">Adicionar-Editar</p>
            </div>
            <div className="flex items-center gap-2 text-white  cursor-pointer">
              <ShoppingCart color="white" size={"2rem"} />
              <p className="text-lg">Compras-Semanais</p>
            </div>
            <Settings />
          </nav>
        </div>
      </div>
    </>
  );
}
