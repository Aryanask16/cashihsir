/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: ["*", "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
    
    extend: {
      colors: {
        white: "#fff",
        lavender: "#d3def7",
        darkslateblue: "#392d82",
        mediumblue: "rgba(9, 67, 255, 0.71)",
        gainsboro: "#e6e6e6",
        darkblue: "#012ab0",
        midnightblue: "#022083",
        gray: "rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        "satoshi-variable": "'Satoshi Variable'",
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        "6xs": "7px",
      },
      fontSize: {
        base: "16px",
        xl: "20px",
        xs: "12px",
        "5xl": "24px",
        lgi: "19px",
        "9xl": "28px",
        "3xl": "22px",
        "17xl": "36px",
        "10xl": "29px",
        "21xl": "40px",
        "13xl": "32px",
        inherit: "inherit",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
