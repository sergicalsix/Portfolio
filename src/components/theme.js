// theme.js

import { extendTheme } from "@chakra-ui/react";

// カラーパレットの定義
const colors = {
  brand: {
    50: "#FCEEEB",
    100: "#F8D8D1",
    200: "#F2C0B7",
    300: "#ECAA9D",
    400: "#E79483",
    500: "#E17E69",
    600: "#C5705F",
    700: "#A96155",
    800: "#8B524B",
    900: "#6D4341",
  },
  accent: {
    50: "#FFF4EB",
    100: "#FFDACD",
    200: "#FFC0AF",
    300: "#FFA590",
    400: "#FF8B71",
    500: "#FF714F",
    600: "#E86449",
    700: "#CF573F",
    800: "#B64935",
    900: "#9D3C2B",
  },
};

// Chakra UIのテーマを拡張
const theme = extendTheme({
  colors,
});

export default theme;
