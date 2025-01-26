export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#14213D',
        'bg-color2': '#000000',
        'primary-color': '#E5E5E5',
        'secondary-color': '#FCA311',
      },
      fontFamily: {
        'mono': ['monospace'],
      },
    },
  },
  plugins: [],
}