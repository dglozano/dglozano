import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { blueGrey, deepOrange } from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    dglozano: {
      palette: {
        lightBlue: string;
        darkBlue: string;
        lightOrange: string;
        white: string;
      };
    };
  }

  interface ThemeOptions {
    dglozano?: {
      palette?: {
        darkBlue?: string;
        lightBlue?: string;
        lightOrange?: string;
        white?: string;
      };
    };
  }
}

export const lightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: { main: blueGrey[900] },
      secondary: { main: deepOrange[700] },
    },
    typography: {
      fontFamily: "'Montserrat', sans-serif",
      body1: {
        fontSize: 20,
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 500,
        },
      },
    },
    dglozano: {
      palette: {
        darkBlue: "#011f2c",
        lightBlue: "#026492DD",
        lightOrange: "#d6bfac",
        white: "#fafafa",
      },
    },
  })
);

export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    ...lightTheme,
    palette: {
      type: "dark",
      primary: { main: blueGrey[100] },
      secondary: { main: lightTheme.palette.secondary.main },
      background: { paper: blueGrey[900] },
    },
  })
);
