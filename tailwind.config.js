/** @type {import('tailwindcss').Config} */
module.exports= {
  darkMode: 'class',
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sp: "200px",
      sm:"300px",
      pc: "1200px",
      md:	"768px",
      lg:	"1024px",
      xl:	"1280px",
    },
    extend: {},
  },
  plugins: [],
}

