/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aldrich: ["Aldrich", "sans-serif"],
        objektivmk1_bold: ["Objektiv Mk1 Trial", "sans-serif"],
        eigerdals: ["Eigerdals", "sans-serif"],
        objektivmk1: ["Objektiv Mk1 Trial Rg", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      screens: {
        samsungS8: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    // ...
  ],
}
