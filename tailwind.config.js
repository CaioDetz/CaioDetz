/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx ,js}"],
  theme: {
    extend: {
     animation: {
        'open': 'open .5s linear infinite',
      },
      keyframes: {
        open: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      }
    },
  },
  plugins: [],
};
