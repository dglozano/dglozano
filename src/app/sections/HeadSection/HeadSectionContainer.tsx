import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core";

import HeadSection from "app/sections/HeadSection/HeadSection";
import { darkTheme } from "config/themes";

const waveStyles = makeStyles(theme => ({
  wave: {
    color: "#026492DD",
    display: "block",
    overflow: "hidden",
    transform: "translateY(-50%)",
    width: "100%",
    "& svg": {
      fill: theme.palette.background.default,
      height: "auto",
      marginLeft: "-1%",
      width: "102%"
    }
  }
}));
const HeadSectionContainer = () => {
  const classes = waveStyles();

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <HeadSection />
      </ThemeProvider>
      <div className={classes.wave}>
        <svg viewBox="0 0 1440 73">
          <path d="M1440 .008V73H0V.008c724.512 25.323 1204.512 25.323 1440 0z"></path>
        </svg>
      </div>
    </>
  );
};

export default HeadSectionContainer;
