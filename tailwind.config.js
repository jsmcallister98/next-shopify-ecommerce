const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-scene": "url(/images/scene.svg)",
        "scene-with-wave": "url(/images/scene-with-wave.svg)",
        "mobile-scene-with-wave": "url(/images/is-svg.svg)",
        "large-scene": "url(/images/scene-large.svg)",
        "mobile-scene": "url(/images/scene-mobile.svg)",
        "main-wave": "url(/images/wave.svg)",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "900px",
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
