/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xl: "400px",
      },
      animation: {
        Blob: "Blob 7s cubic-bezier(0.25, 0.8, 0.25, 1) infinite",
      },
      keyframes: {
        Blob: {
          "0%": {
            transform: "translate(0px, 30px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, 0px) scale(1.1)",
          },
          "66%": {
            transform: "translate(20px, 50px) scale(0.9)",
          },
          "100%": {
            transform: "translate(5px, 3px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
