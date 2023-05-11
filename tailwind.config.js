/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["**/*.html"],
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
//     keyframes: {
//       'spin-right': {
//         '100%': {
//           '-webkit-transform': 'rotate(360deg)',
//           '-moz-transform': 'rotate(360deg)',
//           '-ms-transform': 'rotate(360deg)',
//           '-o-transform': 'rotate(360deg)',
//           transform: 'rotate(360deg)'
//         }
//       }

//       /*
//       @-webkit-keyframes spin-right {
//   100% {
//     '-webkit-transform': rotate(360deg),
//     '-moz-transform': rotate(360deg),
//     '-ms-transform': rotate(360deg),
//     '-o-transform': rotate(360deg),
//     transform: rotate(360deg);
//   }
// }

//       */
//     }
  },
  plugins: [],
}

