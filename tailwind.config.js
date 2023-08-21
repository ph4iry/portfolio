import defaultTheme from 'tailwindcss/defaultTheme';
// import withMT from '@material-tailwind/react/utils/withMT';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
      // colors: {
      //   ...defaultTheme.colors,
      // },
    },
  },
  plugins: [],
};

module.exports = config;
