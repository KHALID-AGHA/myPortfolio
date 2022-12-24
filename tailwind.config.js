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
      'darkTitle': "#9ebac0",
      'darkFilter': '#5f7478',
      'app': "#121215",
      'darkApp': '#f1f5f9',
      'black': '#242D49',
      'blueCard': '#DDF8FE',
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