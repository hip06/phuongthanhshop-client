
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html'
  ],
  theme: {
    extend: {
      cursor: {
        'pointer': 'pointer'
      },
      backgroundColor: {
        'overlay-70': 'rgba(0,0,0,0.7)',
        'overlay-30': 'rgba(0,0,0,0.3)',
        'overlay-80': 'rgba(0,0,0,0.8)',
      }
    },
  },
  plugins: [],
}