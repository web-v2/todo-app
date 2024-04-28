/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1C35",
        secondary: "#ED7926",
        accent: "#585D73",
        error: "#D92525",
        success: "#A3CCAB",
      },
    },
  },
  plugins: [],
};
