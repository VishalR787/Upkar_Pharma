/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        deep: '#1A1A2E',
        gold: '#C9A84C',
        'gold-light': '#E8D5A3',
        cream: '#FAF6EF',
        parchment: '#EDE4D3',
        wine: '#6B2737',
        charcoal: '#3D3D52',
        muted: '#8C8C9E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}