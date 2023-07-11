/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: "#15803d",
        accent: "#404040",
      },
    },
  },
  plugins: [],
};
