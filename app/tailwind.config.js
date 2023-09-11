/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        playPauseBtn: "0 0 5px 20px rgba(0, 0, 0, 0.5)",
        BottomShadow: "0 0 5px 20px rgba(200, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
