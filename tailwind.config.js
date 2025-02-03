/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      sans: ['"Bagos Standard"', "sans-serif"],
      serif: ['"GT Alpin"', "serif"],
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#000000",
        },
        white: {
          DEFAULT: "#ffffff",
        },
        grey: colors.zinc,
        primary: {
          DEFAULT: "#6149f6",
          light: "#a093fa",
          xlight: "#d7d2fd",
          xxlight: "#efedfe",
        },
        secondary: {
          DEFAULT: "#a093fa",
          light: "#d7d2fd",
        },
        tertiary: {
          DEFAULT: "#d7d2fd",
          light: "#efedfe",
        },
      },
    },
  },
  safelist: [
    {
      pattern:
        /(bg|text|border)-(black|white|grey|primary|secondary|tertiary|transparent)-(light|xlight|xxlight)/,
      variants: ["hover"],
    },
  ],
};
