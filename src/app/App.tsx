import React from "react";
import {
  Grid,
  makeStyles,
  useScrollTrigger,
  Zoom,
  Fab
} from "@material-ui/core";

import AppToolbar from "app/AppToolbar/AppToolbar";
import HeadSection from "app/sections/HeadSection/HeadSection";
import ContactSection from "app/sections/ContactSection/ContactSection";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Footer from "app/Footer/Footer";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 320,
    minHeight: "100vh"
  },
  content: {
    flex: 1
  },
  backToTop: {
    position: "fixed",
    bottom: theme.spacing(10),
    right: theme.spacing(2)
  }
}));

const App = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Grid container direction="column" className={classes.root}>
      <AppToolbar />
      <Grid container direction="column" className={classes.content}>
        <HeadSection />
        <ContactSection />
      </Grid>
      <Zoom in={trigger}>
        <div
          onClick={handleClick}
          role="presentation"
          className={classes.backToTop}
        >
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </div>
      </Zoom>
      <Footer />
    </Grid>
  );
};

export default App;
