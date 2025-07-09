/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        press_start: ['"Press Start 2P"', 'sans-serif'],
        // opcional: para aplicar como padrão do sans
        sans: ['"Poppins"', 'Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
