/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgb(215, 216, 223)",
        secondary: "#f0f0f0",
      },
      colors: {
        "brand-teal": "#38bcb3",
      },
      textColor: {
        secondary: "#66676a",
      },
    },
  },
  plugins: [],
};
