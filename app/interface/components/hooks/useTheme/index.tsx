"use client";
import { createContext, useEffect, useState } from "react";

const theme = "";
function setTheme(): void {}

let click = false;
export function useTheme(): void {
  const containerHtml = document.querySelector("#container");
  click = !click;

  if (click || containerHtml?.classList.value == "") {
    if (containerHtml?.classList.value == "") {
      containerHtml?.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      containerHtml?.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  } else {
    containerHtml?.classList.remove("dark");
    localStorage.removeItem("theme");
  }
}

interface ITheme {
  useTheme: Function;
  theme: string;
  setTheme: Function;
}
export const ThemeContext = createContext<ITheme>({
  useTheme,
  theme,
  setTheme,
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("");
  function themeActive() {
    const containerHtml = document.querySelector("#container");

    if (localStorage.getItem("theme") == "dark") {
      setTheme("dark");
      containerHtml?.classList.add("dark");
    } else {
      setTheme("light");
    }
  }
  useEffect(() => {
    themeActive();
  }, [themeActive]);
  return (
    <ThemeContext.Provider value={{ useTheme, theme, setTheme }}>
      <body className="dark:text-white dark:bg-grayBackground">{children}</body>
    </ThemeContext.Provider>
  );
}
