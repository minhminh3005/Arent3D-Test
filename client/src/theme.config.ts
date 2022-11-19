import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: false; // removes the `xs` breakpoint
    md: true;
    lg: true;
    xl: false; // removes the `xl` breakpoint
  }
}
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

const light = {
  palette: {
    mode: "light",
    primary: {
      main: "#FF963C",
      light: "#FFCC21",
      dark: "#0448CA",
    },
    secondary: {
      main: "#8FE9D0",
    },
    neutral: {
      main: "#414141",
      light: "#777777",
      dark: "#2E2E2E",
    },
  },
  spacing: [0, 4, 8, 16, 24, 28, 32, 48, 56],
  breakpoints: {
    values: {
      xs: 0,
      md: 600,
      lg: 960,
    },
  },
  typography: {
    fontFamily: ["Noto SansCJK JP", "Inter"].join(","),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: `
          &.MuiPaper-root {
            box-shadow:rgb(0 0 0 / 8%) 0px 1px 12px;
            background-color: #414141;
            color: #fff;
          }`,
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            background:
              "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
            fontSize: "18px",
            color: "#fff",
            width: "288px",
            height: "26px",
            padding: "16px 0px",
          },
        },
      ],
    },
    MuiMenu: {
      styleOverrides: {
        paper: `
          &.MuiPaper-root {
            background-color: #777777;
            color: #fff;
            border-radius: 0px;
          }`,
        list: `
          padding: 0px;
        `,
      },
    },
  },
};

export const rateColor = "#faaf00";
export default Object.assign(
  {},
  {
    light,
    dark: {},
  }
);
export const theme = createTheme(light as ThemeOptions);
