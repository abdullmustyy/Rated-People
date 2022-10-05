/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#211c23",
        gray: "#636065",
        neon: "#84b818",
        green: "#3b852a",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        heroBg: "url('/src/assets/houses.jpg')",
      },
    },
  },
  plugins: [],
};
