/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "cabin": ['Cabin', 'sans-serif']
      },
      colors: {
        "tl-primary-100" : "#163357",
        "tl-primary-200": "#606060"
      },
      backgroundImage: {
        'gradient-linear':
          'linear-gradient(180deg, rgba(8, 11, 15, 0.00) 59.90%, rgba(22, 51, 87, 0.80) 78.65%)',
      },
    },
  },
  plugins: [],
}