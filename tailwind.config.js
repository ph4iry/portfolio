/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["**/*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'muted': '#9DA3AE'
      }
    },
    fontFamily: {
      'sans': ['"Work Sans"', ...defaultTheme.fontFamily.sans],
      'mono': ['"Space Mono"', ...defaultTheme.fontFamily.mono],
      'display': ['"Cairo Play"'],
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

