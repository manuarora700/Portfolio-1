const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        darkImage: "Logojeanwhite.png",
        lightImage: "Logojuedicopy1.png",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
    },
  },
  variants: {
    extend: { backgroundImage: ['dark']},
    display: ["responsive", "group-hover", "group-focus"],
  },

  plugins: [],
};
