/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppin': ['Poppins', 'sans-serif'],
        'opns': ['Open Sans', 'sans-serif'],
      },
     maxWidth:{
      container:"1120px"
     },
     colors:{
      clrs:"blue"
     },
     backgroundColor:{
      bgclr: "green"
     }
    },
  },
  plugins: [],
}

