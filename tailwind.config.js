/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'lightBeige': '#FFEFD6',
      'heavyBeige': '#F2DEBA',
      'heavyTeal': '#0E5E6F',
      'lightTeal': '#3A8891',
      'darkNavbar': '#a1c5c9',
      'lightNavbar': '#e2e8f0',
      'yellow': '#F5C32C',
      'orange': '#FCA61F',
      'black': '#242D49',
      'gray': '#788097',
      'blueCard': '#DDF8FE',
      'purple': 'rgb(238 210 255)',
      'boxShadow': '0px 19px 60px rgb(0 0 0 / 8 %)',
      'orangeCard': 'rgba(252, 166, 31, 0.45)',
      'smboxShadow': '-79px 51px 60px rgba(0, 0, 0, 0.08)',
    },
    screens: {
      lg: { max: "991px" },
      md: { max: "769px" },
      sm: { max: "479px" },
    },
    keyframes: {
      shake: {
        '0% , 50%': { transform: ' translateY(-10%)' },
        '50% , 100%': { transform: ' translateY(0%)' },
      },
    },
    // boxShadow: {
      // "custom":' 7.5px 11.7px 1.6px rgba(0, 0, 0, 0.166) , 16.6px 25.9px 11.8px rgba(0, 0, 0, 0.179) , 28.7px 44.7px 47.1px rgba(0, 0, 0, 0.184) 47.8px 74.4px 71.9px rgba(0, 0, 0, 0.187) , 92px 143px 80px rgba(0, 0, 0, 0.19) '
      
      // '8.4px 14.6px 0.2px #3A8891 18.1px 31.6px 2.7px #3A8891 30.6px 53.4px 9.2px #3A8891 50.2px 87.5px 25.3px #3A8891 97px 169px 80px #3A8891'
    // },
    
    animation: {
      'shaking-input': 'shake 1s ease-in-out 0s 1',
    },
    variants: {
      extend: {
        inset: ["group-hover"],
      }
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}