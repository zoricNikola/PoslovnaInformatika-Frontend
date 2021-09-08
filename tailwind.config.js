const colors = require("tailwindcss/colors");

module.exports = {
  prefix: "",
  purge: {
    enabled: false,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        perfectDark: {
          DEFAULT: "#323334",
        },
        orange: colors.orange,
        violet: colors.violet,
        coolGray: colors.coolGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
  ],
};
