// 1. Import the extendTheme function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#58137F",
    800: "#521A9D",
    700: "#4221BA",
    600: "#2A2AD6",
    500: "#335BF1",
    400: "#4C8FF6",
    300: "#65BBF9",
    200: "#7FDFFC",
    100: "#9AFAFE",
    50: "#B6FFF5",
    20: "#D2FFF1",
  },
};

const config: ThemeConfig = {
  initialColorMode: "dark",
};

export const theme = extendTheme({ colors, config });
