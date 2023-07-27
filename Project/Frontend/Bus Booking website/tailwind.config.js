/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#fba239",
        seashell: "#fff5ee",
        gray: {
          "100": "#fffefe",
          "200": "#0d0d0d",
        },
        darkgray: "#a09f9f",
        dimgray: {
          "100": "#6d6c6c",
          "200": "#4e4c4c",
        },
        black: "#000",
        gainsboro: "#d9d9d9",
        limegreen: "#09b945",
        white: "#fff",
      },
      fontFamily: {
        outfit: "Outfit",
      },
      borderRadius: {
        "6xs": "7px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      "3xs": "0.63rem",
      mini: "0.94rem",
      xs: "0.75rem",
      sm: "0.88rem",
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '900px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
      '2sm': { 'max': '350px' }
    }
  },
  corePlugins: {
    preflight: false,
  },
};
