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
        'footer-line': '1px',
      },

      screens:{
        'extrasmall': "320px",
      },

      fontFamily: {
        'inter': '"Inter", sans-serif',
        'bona': '"Bona Nova", serif',
      },

      backgroundImage:{
        'bookpoint-header-bg': "url('./src/img/frontend/header/headerbg.jpg')",
        'bookpoint-hero-bg': "url('./src/img/frontend/hero/hero.jpg')",
        'gold-radial': 'radial-gradient(50% 50% at 50% 50%, #CC9600 0%, #F70 100%)',
      },

      colors:{
        'hero-color': '#4B330B',
        'section-color': '#CC9600',
      },

    },
  },
  plugins: [],
}

