import type { Config } from "tailwindcss";

export default {
  mode: "jit",
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
