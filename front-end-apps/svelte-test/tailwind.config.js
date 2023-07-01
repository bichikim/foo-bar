/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {},
  },
}
