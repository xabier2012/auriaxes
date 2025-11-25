/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'auria-green': {
          DEFAULT: '#9BCB3C',
          50: '#f5fbe8',
          100: '#e8f6cb',
          200: '#d2ed9e',
          300: '#b4e06b',
          400: '#9BCB3C', // Base
          500: '#82aa32', // Hover
          600: '#6a8a29', // Text
        },
        'auria-black': {
          DEFAULT: '#1D1D1B',
          800: '#2C2C2A',
          900: '#1D1D1B',
        }
      }
    },
  },
  plugins: [],
}

