/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
    extend: {
      animation: {
        "text-slide-2":
          "text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
      keyframes: {
        "text-slide-2": {
          "0%, 40%": {
            transform: "translateY(0%)",
          },
          "50%, 90%": {
            transform: "translateY(-33.33%)",
          },
          "100%": {
            transform: "translateY(-66.66%)",
          },
        },
      },
    },
  },
  plugins: [],
};
