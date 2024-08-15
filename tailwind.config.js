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
        "56px": [
          "56px",
          {
            lineHeight: "64px",
          },
        ],
      },
      colors: {
        primary: "#3639A4",
        secondary: {
          50: "#B4B6C4",
          100: "#645E76",
          200: "#2C2643",
        },
        tertiary: "#43E7DF",
        customOrange: "#FF7364",
      },
      backgroundImage: {
        banner: "url('/BG_Shape.png')",
      },
      spacing: {
        3.75: "15px",
        9.25: "37px",
        12.5: "50px",
        42.75: "171px",
        48.75: "195px",
        116.75: "467px",
        120: "480px",
        139.5: "558px",
        150.75: "603px",
        199: "796px",
        300: "1200px",
        "6.5%": "6.5%",
        "69.4%": "69.4%",
        "82%": "82%",
        "80vw": "80vw",
      },
    },
  },
  plugins: [],
};
