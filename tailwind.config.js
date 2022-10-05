/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        "primary":['Manrope', "sans-serif"]
      },
      colors:{
        primary:{
          DEFAULT:"#1E2739"
        },
        secondary:{
          DEFAULT:"#FF7272"
        },
        black:{
          DEFAULT:"#1A1A1A",
          100 : "#626475"
        }
      },
      lineHeight:{
        'md':"35px"
      },
      dropShadow:{
        '3xl':'0px -305px -50px 15px rgb(0, 0, 0)'
      }
    },
  },
  plugins: [ require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded']
}
}
