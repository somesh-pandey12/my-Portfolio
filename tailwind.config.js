/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#08080d',
          900: '#0d0e16',
          800: '#13141f',
          700: '#1b1c2a',
          600: '#262838',
          border: '#23253550',
        },
        mist: {
          100: '#f5f5fa',
          300: '#c8c9d8',
          500: '#8a8ba3',
        },
        brand: {
          from: '#818cf8',
          to: '#c084fc',
          solid: '#8b7cf6',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
      },
    },
  },
  plugins: [],
}