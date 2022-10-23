/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      colors: {
        primary: {
          50: "#f8f2ff",
          100: "#f0e6ff",
          200: "#dabfff",
          300: "#c499ff",
          400: "#974dff",
          500: "#6b00ff",
          600: "#6000e6",
          700: "#5000bf",
          800: "#400099",
          900: "#34007d",
        },
        secondary: {
          50: "#fff2f8",
          100: "#ffe6f0",
          200: "#ffbfda",
          300: "#ff99c4",
          400: "#ff4d97",
          500: "#ff006b",
          600: "#e60060",
          700: "#bf0050",
          800: "#990040",
          900: "#7d0034",
        },
        terciary: {
          50: "#f2fbff",
          100: "#e6f8ff",
          200: "#bfedff",
          300: "#99e2ff",
          400: "#4dcdff",
          500: "#00b7ff",
          600: "#00a5e6",
          700: "#0089bf",
          800: "#006e99",
          900: "#005a7d",
        },
      },
    },
  },
  plugins: [],
};
