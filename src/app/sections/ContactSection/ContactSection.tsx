import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  main: {
    minHeight: "70vh",
    backgroundColor: "white"
  }
}));

const HeadSection = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      component={Paper}
      square
      className={classes.main}
    ></Grid>
  );
};

export default HeadSection;
