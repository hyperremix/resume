/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './@/**/*.{ts,tsx}'],
  plugins: [require('tailwindcss-animate')],
};
