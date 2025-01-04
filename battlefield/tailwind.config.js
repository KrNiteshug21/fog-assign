/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        "primary-black": "#101010",
        "primary-orange": "#EE930E",
        "primary-green": "#23C13A",
      },
      fontSize: {
        "2xs": ".625rem",
      },
      backgroundImage: {
        "main-background": "url('/img/background/menu__background.png')",
        "main-background-blur":
          "url('/img/background/menu__background-30blur.jpg')",
      },
    },
  },
  plugins: [],
};
