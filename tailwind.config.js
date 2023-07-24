/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: '#FF3B61',
      purple: '#7e5bef', 
      green:'#12e370', 
      gray: {
        100: '#f7fafc',
        900: '#FFFFFF',
      },     
    },
    fontFamily: {},
    extend: {     
      spacing: {},
      borderRadius: {}
    },
    screens: {},
  },
  plugins: [nativewind()],
}

