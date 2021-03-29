const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.ejs', './src/**/*.md'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      'primary':'#5C0100',
      'beige':'#F5F2EF',
    },
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      height:{
        '400': '400px',
        '1/5': '20%',
        '4/5': '80%',
      }
    },
  },
  variants: {},
  plugins: [],
};