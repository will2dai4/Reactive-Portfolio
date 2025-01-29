export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['monospace'],
      },
      letterSpacing: {
        'wide': '2px',
      },
    },
  },
  plugins: [],
}