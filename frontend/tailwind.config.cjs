/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Lora', 'serif'],
      },
      screens: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
