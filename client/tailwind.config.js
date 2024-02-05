/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "k-brown": "#926b48",
        "k-lightBrown": "#c48d63",
        "K-xlightBrown": "#daa676",
        "k-lightBlue": "#0091c9",
        "K-blue": "#0076af",
        "k-nafti": "#00467d",
        "k-darkBlue": "#00557d",
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
      animation: {
        spinSlow: "spin 10s linear infinite",
      },
      keyframes: {
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
