// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({

        ...theme('colors'),

        'primary': '#F5F9FC',

        'secondary': '#E3E9F7',
      })
    },
  },
  variants: {
    extend: {
      ringColor: ['focus'],
    },
  },
  plugins: [],
}