/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      // montserrat: ["Montserrat", "sans-serif"],
      "montserrat-black": ["Montserrat", "sans-serif"],
      "montserrat-bold": ["Montserrat", "sans-serif"],
      "extra-bold": ["Montserrat", "sans-serif"],
      "montserrat-italic": ["Montserrat", "sans-serif"],
      "montserrat-light": ["Montserrat", "sans-serif"],
      "montserrat-medium": ["Montserrat", "sans-serif"],
      "montserrat-regular": ["Montserrat", "sans-serif"],
      "semi-bold": ["Montserrat", "sans-serif"],
    },
    screens: {
      xxl: { max: "1120px" },
      xl: { max: "1085px" },
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "576px" },
    },
  },
  plugins: [],
};
