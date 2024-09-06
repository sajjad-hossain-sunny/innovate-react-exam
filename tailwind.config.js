/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          xs: "10px",
          sm: "10px",
        },
        screens: {
          xs: "100%",
          sm: "100%",
          lg: "1210px",
          xl: "1410px",
          "2xl": "1410px",
        },
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        chivo: ["Chivo", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "46px": "46px",
        "56px": [
          "56px",
          {
            lineHeight: "64px",
          },
        ],
      },
      lineHeight: {
        "14.5": "58px"
      },
      letterSpacing: {
        "tightestest": '-1px',
      },
      colors: {
        primary: {
          50: "#F4FAFA",
          100: "#43E7DF",
          200: "#2290F5",
          300: "#3639A4",
        },
        secondary: {
          50: "#B4B6C4",
          100: "#645E76",
          200: "#2C2643",
        },
        customOrange: "#FF7364",
        glass: "rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {
        banner: "url('/BG_Shape.png')",
      },
      spacing: {
        0.75: "3px",
        3.75: "15px",
        4.5: "18px",
        5.5: "22px",
        7.5: "30px",
        9.25: "37px",
        12.5: "50px",
        13.75: "55px",
        29: "116px",
        30.5: "122px",
        30.75: "123px",
        35: "140px",
        35.5: "142px",
        42.75: "171px",
        48.75: "195px",
        80: "320px",
        84: "336px",
        116.75: "467px",
        120: "480px",
        139.5: "558px",
        150.75: "603px",
        199: "796px",
        300: "1200px",
        "6.5%": "6.5%",
        "69.4%": "69.4%",
        "80%": "80%",
        "82%": "82%",
        "80vw": "80vw",
      },
      boxShadow: {
        'intergrateIcon': '0 35px 40px -1.15px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};
