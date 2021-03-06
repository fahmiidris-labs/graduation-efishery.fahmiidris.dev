const defaultTheme = require('tailwindcss/defaultTheme');

const tailwindConfig = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['Inter Var', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
