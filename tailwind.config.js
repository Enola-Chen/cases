/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D5226',
        'lightRed':'#CF1026',
        'darkRed':'#9A0B1B'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.writing-mode-vertical': {
          'writing-mode': 'vertical-rl',
        },
        '.writing-mode-horizontal': {
          'writing-mode': 'horizontal-tb',
        },
        '.text-stroke': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': 'white',
          'color': 'transparent',
        },
   
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}