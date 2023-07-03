import { type Config } from "tailwindcss";

// https://github.com/chakra-ui/ark/blob/main/website/panda.config.ts#L85
const gray = {
  25: "#FDFDFC",
  50: "#FAFAF9",
  100: "#F5F5F4",
  200: "#E7E5E4",
  300: "#D7D3D0",
  400: "#A9A29D",
  500: "#79716B",
  600: "#57534E",
  700: "#44403C",
  800: "#292524",
  900: "#1C1917",
  950: "#0E0D0C",
};

const orange = {
  50: "#F6E1DB",
  100: "#EEC2B7",
  200: "#E49582",
  300: "#DE7960",
  400: "#EB5E41",
  500: "#BD4E34",
  600: "#953D2B",
  700: "#662314",
  800: "#451D14",
  900: "#391915",
  950: "#1D0D0B",
};

const brown = {
  50: "#78574F",
  100: "#5B4039",
  200: "#4E3630",
  300: "#3D2925",
  400: "#33221E",
  500: "#2D1D19",
  600: "#261916",
  700: "#201412",
  800: "#1D1615",
  900: "#0F0705",
  950: "#080403",
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      transparent: "transparent",
      inherit: "inherit",
      currentColor: "currentColor",

      gray,
      primary: orange,
      secondary: brown,
    },
  },
  plugins: [],
} satisfies Config;
