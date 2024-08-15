/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        center: true,
        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }

          'md': '768px',
          // => @media (min-width: 768px) { ... }

          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }

          'xl': '1410px',
          // => @media (min-width: 1280px) { ... }
        }
      },
      fontFamily: {
        'chivo': ["Chivo", 'sans-serif'],
        'dm': ["DM Sans", 'sans-serif'],
      },
      fontSize: {
        '56px': ['56px', {
          lineHeight: '64px',
        }],
      },
      colors: {
        'primary': '#3639A4',
        'secondary': {
          100: '#645E76',
          200: "#2C2643"
        },
        'tertiary': "#43E7DF",
        'customOrange': '#FF7364'
      },
      backgroundImage: {
        'banner': "url('/BG_Shape.png')",
      },
      spacing: {
        '3.75': '15px',
        '9.25': '37px',
        '12.5': '50px',
        '48.75': '195px',
        '116.75': '467px',
        '120': '480px',
        '139.5': '558px',
        '199': '796px',
      }
    },
  },
  plugins: [],
}