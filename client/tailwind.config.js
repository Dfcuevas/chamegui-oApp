/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      indigo500: "#a5b4fc",
      indigo100: "#e0e7ff",
      orange50: "#FFF7ED",
      grayBorder: "#696C69",
      white: "#fff",
      gray900: "#18181b",
      bgGray: "#fafafa",
      indigo50: "#eef2ff",
    },
    fontFamily: {
      OpenSans: ["Open Sans Variable", "sans-serif"],
      Lora: ["Lora Variable", "serif"],
    },
    extend: {
      boxShadow: {
        custom: "0px 1px 2px 0px #0000000F, 0px 1px 3px 0px #0000001A",
      },
    },
  },
  plugins: [],
};
