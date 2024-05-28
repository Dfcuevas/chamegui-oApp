/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      indigo500: "#6366F1",
      orange50: "#FFF7ED",
      grayBorder: "#696C69",
    },
    fontFamily: {
      OpenSans: ["Open Sans Variable", "sans-serif"],
      Lora: ["Lora Variable", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
