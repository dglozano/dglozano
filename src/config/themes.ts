import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { blueGrey, deepOrange } from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    dglozano: {
      palette: {
        lightBlue: string;
        darkBlue: string;
      };
    };
  }

  interface ThemeOptions {
    dglozano?: {
      palette?: {
        darkBlue?: string;
        lightBlue?: string;
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
        darkBlue: "#011f2cee",
        lightBlue: "#026492DD",
      },
    },
  })
);

export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    ...lightTheme,
    palette: {
      type: "dark",
      primary: { main: lightTheme.palette.primary.main },
      secondary: { main: lightTheme.palette.secondary.main },
    },
  })
);
