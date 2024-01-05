import { useContext } from "react";
import { ThemeContext } from "../..";
import { Moon, Sun } from "lucide-react";
export function ChangeTheme() {
  const { useTheme, theme, setTheme } = useContext(ThemeContext);

  return (
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
  );
}
