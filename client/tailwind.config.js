/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "k-brown": "#926b48",
        "k-lightBrown": "#c48d63",
        "k-xlightBrown": "#daa676",
        "k-lightBlue": "#0091c9",
        "k-blue": "#0076af",
        "k-nafti": "#00467d",
        "k-darkBlue": "#00557d",
        "k-background": "#330000",
      },
      fontFamily: {
        sans: ['"Maven Pro", sans-serif'],
        yellotail: ['"Yellowtail"'],
        
      },
      animation: {
        spinSlow: "spin 10s linear infinite",
        wave: "wave 1s ease-in-out infinite",
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
        wave: {
          "0% 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
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
