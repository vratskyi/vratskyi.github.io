/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "424px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        background: ["#4444"],
        primary: ["#0000FF"],
        secondary: ["#18181B"],
        accent: ["#FFFFFF"],
      },
      fontFamily: {
        sans: [("Kanit", "sans-serif"), ("Montserrat", "sans-serif")],
      },
    },
  },
  plugins: [
    require("autoprefixer"),
    require("cssnano"),
    "@tailwindcss/typography",
  ],
};
