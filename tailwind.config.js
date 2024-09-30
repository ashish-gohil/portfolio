/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transform: {
        "scale-3d": "scale3d(1, 1, 1)",
      },
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
        titleFont: ['"Caveat Brush"', "serif"],
      },
    },
  },
  plugins: [],
};
