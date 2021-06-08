import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    heading: "Arial",
    body: "Inter",
  },

  styles: {
    global: {
      "html, body": {},
      h2: {
        fontSize: "28px",
      },
      h3: {
        fontSize: "22px",
      },
      h4: {
        fontSize: "20px",
      },
      p: {
        fontSize: "18px",
      },
      figcaption: {
        fontSize: "12px",
      },
    },
  },

  colors: {
    ...theme.colors,
    /** Example */
    // teal: {
    //   ...theme.colors.teal,
    //   700: "#005661",
    //   500: "#00838e",
    //   300: "#4fb3be",
    // },
    primary: {
      50: "#fdf7e0",
      100: "#f0e6be",
      200: "#e4d598",
      300: "#d9c472",
      400: "#ceb34b",
      500: "#b49a31",
      600: "#8c7824",
      700: "#645618",
      800: "#3d330a",
      900: "#171100",
    },
  },
  components: {
    /** Example */
    // Button: {
    //   baseStyle: {
    //     borderRadius: 24,
    //   },
    // },
  },
});

export default customTheme;
