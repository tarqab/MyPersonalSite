/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      'xs': { 'max': '400px' },
      'sm': { 'max': '640px' },
      'sml': { 'max': '1128px' },
      'md': { 'min': '1400px' },
      'lg': { 'min': '1656px' },
      'xl': { 'min': '2014px ' }
    },

    extend: {
      backgroundImage: {
        "realestate": "url('./src/assets/realestate.jpg')",

      },
    },
    fontFamily: {
      Caladea: ['Caladea', "sans-serif"]
    },
  },
  plugins: [],
}
