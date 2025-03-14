import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      fontFamily: {
        sans: "var(--font-archivo)",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "4rem",
        },
      },
      colors: {
        "red-orange": {
          500: "#5a04ff",
        },
        stone: {
          200: "#EDEDEF",
          300: "rgba(90, 4, 255)",
          400: "#22223E",
          500: "#3B3B5A",
          600: "#5a04ff",
          900: "#22223E",
        },
      },
    },
  },
  plugins: [],
};
export default config;
