import React from "react";
import {
  Fab,
  Grid,
  makeStyles,
  useScrollTrigger,
  Zoom
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import AppFooter from "components/app/AppFooter";
import AppToolbar from "components/app/AppToolbar";
import HeadSectionContainer from "components/home/HeadSection/HeadSectionContainer";

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
      anchor.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <Grid container direction="column" className={classes.root}>
      <AppToolbar />
      <Grid container direction="column" className={classes.content}>
        <HeadSectionContainer />
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
      <AppFooter />
    </Grid>
  );
};

export default App;
