/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue900: " #13183F",
        blue600: "#666CA3",
        pink600: "#F74780",
        pink300: "#FFA7C3",
        grey: "#83869A",
      },

      backgroundImage: {
        "gradient-pink": "linear-gradient(to bottom,  #ff6f48,#f02aa6)",
        "gradient-purple": "linear-gradient(to bottom, #4851ff,#f02aa6)",
      },

      fontSize: {
        "fs-1": "3.5rem",
        "fs-2": "2.5rem",
        "fs-3": "2rem",
        "fs-4": "1.5rem",
        "fs-5": "text-lg",
        "fs-6": "text-base",
        "fs-7": "text-lg",
      },

      lineHeight: {
        "120%": "1.2",
        "150%": "1.5",
      },

      fontFamily: {
        "ff-main": ["Plus Jakarta Sans", "serif"],
      },

      boxShadow: {
        "card-shadow": "0 25px 50px 0 rgba(6, 22, 141, 0.0442)",
      },
    },
  },
  plugins: [],
};
