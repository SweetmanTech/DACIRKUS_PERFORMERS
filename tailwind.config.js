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
        objektivmk1_bold: ["ObjectivMK1_Trial_Bd", "sans-serif"],
        objektivmk1: ["ObjectivMK1_Trial_Rg", "sans-serif"],
        eigerdals: ["Eigerdals", "sans-serif"],
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require("@tailwindcss/forms"),
    // ...
  ],
}
