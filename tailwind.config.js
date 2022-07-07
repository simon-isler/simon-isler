/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#F2F2F2',
        'light-blue': '#84A9BF',
        'brown': '#593A2E',
      },
    },
  },
  plugins: [],
}
