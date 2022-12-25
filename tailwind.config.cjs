/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      // that is animation class
      animation: {
        zoomin: 'zoomIn 1s ease-in-out',
        zoomin2: 'zoomIn 2s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        zoomIn: {
          '0%': { scale: theme('scale.0') },
          '100%': { scale: theme('scale.100') },
        },
      }),
    },
  },
  plugins: [],
}

