const { withTV } = require('tailwind-variants/transformer')

module.exports = withTV({
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FF0000',
          200: '#FFD700',
        },
        //Fix: Overwrite indigo for tailwind-date-picker usage
        indigo: {
          100: "#FAD200",
          200: "#FFA400",
          300: "#FFD300",
          400: "#FFD200",
          500: "#FFD500",
          600: "#FFA200",
          700: "#FFD200",
          800: "#FFD500",
          900: "#FFD700"
        }
      },
      text: {
        primary: '#FFD700',
      },
      fontFamily: {
        sans: ['Hammersmith One', 'sans-serif'],
      },
      flex: {
        2: '2',
        3: '3',
      },
      boxShadow: {
        card: '10px 10px 30px 9px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
})
