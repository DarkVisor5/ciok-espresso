/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#411900",   // Marrone Scuro
        secondary: "#F5F5DC", // Beige Chiaro
        accent: '#B2C8BA', 
        neutral: "#FAF3E0",   // Crema
        highlight: "#DAA520", // Oro
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cioktheme: {
          primary: '#411900',
          secondary: '#FAF3E0',
          neutral: '#FFFCF5',
          accent: '#B2C8BA',
          'base-100': '#FFFCF5',
          info: '#D4AF37',
          success: '#4ade80',
          warning: '#facc15',
          error: '#f87171',
        },
      },
    ],
  },
};