/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './index.html'],
  theme: {
    extend: {
      colors: {
        'app-accent': {
          500: '#6E3FFE',
          400: '#fa9fff',
          300: '#362b48',
        }
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
          },
             '100%': {
            opacity: 1,
          }
        }
      },
      animation: {
        'fade-in-slow': 'fade-in .8s ease-in',
        'fade-in': 'fade-in .6s ease-in',
        'fade-in-s': 'fade-in .5s ease-in',
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss', function({addUtilities}){
    const newUtilities = {
      ".no-scrollbar::-webkit-scrollbar":{
        display: "none",
      },
      ".no-scrollbar":{
        "-ms-overflow-style": "none",
        "scrollbar-width": "none"
      }
    };

    addUtilities(newUtilities)
  }],
};
