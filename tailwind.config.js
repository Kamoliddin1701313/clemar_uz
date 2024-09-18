/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "montserrat-bold": ["Montserrat", "sans-serif"],
    },
    screens: {
      xxl: { max: "1280px" },
      xl: { max: "992px" },
      lg: { max: "768px" },
      md: { max: "576px" },
      sm: { max: "400px" },
    },
  },
  plugins: [],
};
