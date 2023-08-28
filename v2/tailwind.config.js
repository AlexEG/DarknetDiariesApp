/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        playPauseBtn: "0 0 5px 20px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
