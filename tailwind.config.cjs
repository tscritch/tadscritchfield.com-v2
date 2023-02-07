/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 2s ease-in-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%, ": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
