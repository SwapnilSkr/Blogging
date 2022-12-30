/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        manrope: ['Manrope', 'sans-serif'],
        noticia: ['Noticia Text', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}