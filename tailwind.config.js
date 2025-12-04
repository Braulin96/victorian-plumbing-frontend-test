/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#408554",
        "primary-red": "#b91c1c",
        white: "#ffffff",
        "light-gray": "#808080",
        "dark-gray": "#262626",
      },
    },
  },
  plugins: [],
};
