/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Mono', 'sans-serif'],
        serif:['Eczar', 'serif']
      },
    },
  },
  plugins: [],
}