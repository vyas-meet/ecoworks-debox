
const colors = require('tailwindcss/colors')
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        green: colors.green,
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      }
    },
    colors: {
      'accentGreen': '#8acf7e',
      'darkGreen': '#067c2e',
      'blue': '#8bdde0',
    }
  },
  plugins: [
    require('tailwindcss'),
    require('precss'),
    require('autoprefixer')
  ]
})
