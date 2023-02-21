/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#4d4237",
        "primary-300": "#E1DBD2",
        "primary-500": "#D0BBAC",
        "secondary-200": "#d0debf",
        "secondary-400": "#748262",
      },
      fontFamily: {
        alexbrush: ["Alex Brush", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
