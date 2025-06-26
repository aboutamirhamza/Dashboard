/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        primary: "1320px",
      },

      screens:{
        'extrasmall': "320px",
      },

    },
  },
  plugins: [],
}

