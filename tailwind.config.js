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
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}