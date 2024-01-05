import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ligthHeader: "rgb(36, 41, 47)",
        darkHeader: "#161b22",
        grayBackground: "#0d1117",
        grayBoder: "#30363d",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
