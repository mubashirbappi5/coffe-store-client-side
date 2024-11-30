/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        hader:"url('https://i.ibb.co.com/PjZHcBS/15.jpg')",
        banner:"url('https://i.ibb.co.com/c6n5nQS/3.png')"
      },
      fontFamily: {
        mainfamily: "Rancho",

      }
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

