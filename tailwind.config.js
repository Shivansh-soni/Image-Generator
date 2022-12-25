/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      rale: ["Raleway", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: ["dracula"],
  // },
};
