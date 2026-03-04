import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3713ec",
          light: "#1325ec",
        },
        background: {
          light: "#f7f8fa",
          dark: "#0E0E11",
        },
        card: {
          dark: "#16161C",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "1.75rem",
      },
      boxShadow: {
        glow: "0 0 25px rgba(55, 19, 236, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;