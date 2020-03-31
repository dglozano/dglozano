import { createMuiTheme, responsiveFontSizes, Theme } from "@material-ui/core";
import { blueGrey, deepOrange } from "@material-ui/core/colors";

export const lightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: { main: blueGrey[900] },
      secondary: { main: deepOrange[800] }
    },
    typography: {
      fontFamily: "'Montserrat', sans-serif"
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 500
        }
      }
    }
  })
);

export const darkTheme = ({ palette, ...outerTheme }: Theme): Theme => {
  const { primary, secondary } = palette;
  return createMuiTheme({
    ...outerTheme,
    palette: {
      type: "dark",
      primary: primary,
      secondary: secondary
    }
  });
};
