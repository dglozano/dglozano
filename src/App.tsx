import React from "react";

import AppToolbar from "AppToolbar/AppToolbar";
import HeadSection from "HeadSection/HeadSection";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 320,
    minHeight: "100vh"
  },
  content: {
    flex: 1
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <AppToolbar />
      <Grid container direction="column" className={classes.content}>
        <HeadSection />
      </Grid>
    </Grid>
  );
};

export default App;
