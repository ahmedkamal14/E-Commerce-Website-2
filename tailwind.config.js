/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#FFFFFF",
        primary2: "#363738",
        secondary1: "#F5F5F5",
        secondary2: "#FEFAF1",
      },
    },
  },
  plugins: [],
};
