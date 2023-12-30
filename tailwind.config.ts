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
        grayHeader: "rgb(36, 41, 47)",
        grayBackground: "#0d1117",
        gayBoder: "#30363d",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
