const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "dynamic-xl": "clamp(1.5rem, 4vw, 6rem)",
      },
      backgroundImage: {
        "mobile-scene": "url(/images/is-svg1.svg)",
        "main-scene": "url(/images/main-scene.svg)",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "880px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
  darkMode: "class",
};
