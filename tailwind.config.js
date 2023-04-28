/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx ,js}"],
  theme: {
    extend: {
     animation: {
        'open': 'open .5s linear forwards',
        'close': 'close .5s linear forwards',
      },
      keyframes: {
        open: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        close: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
        
      }
    },
  },
  plugins: [],
};
