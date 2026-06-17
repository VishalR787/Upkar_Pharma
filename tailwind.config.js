/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#1B4F72',
        pharmagreen: '#27AE60',
        offwhite: '#F8FAFC',
      }
    },
  },
  plugins: [],
}