/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2B59C3", // Main blue from Figma
          50: "#E8EEFF",
          100: "#D1DFFF",
          200: "#A8BFFF",
          300: "#7F9FFF",
          400: "#567FFF",
          500: "#2B59C3", // Original primary
          600: "#2448A1",
          700: "#1D377F",
          800: "#16265D",
          900: "#0F153B",
          950: "#080A1A",
        },
      },
    },
  },
  plugins: [],
}
