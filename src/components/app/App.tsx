import React from "react";
import {
  Fab,
  Grid,
  makeStyles,
  useScrollTrigger,
  Zoom,
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import AppFooter from "components/app/AppFooter";
import AppToolbar from "components/app/AppToolbar";
import HomeContainer from "components/home/HomeContainer";
import { scrollToView } from "utils/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 320,
    minHeight: "100vh",
  },
  content: {
    flex: 1,
  },
  backToTop: {
    position: "sticky",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    marginTop: `calc(-40px - ${theme.spacing(2)}px)`,
    marginBottom: theme.spacing(2),
    alignSelf: "flex-end",
  },
}));

const App = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Grid container direction="column" className={classes.root}>
      <AppToolbar />
      <Grid container direction="column" className={classes.content}>
        <HomeContainer />
        <Zoom in={trigger}>
          <Fab
            onClick={(event: React.MouseEvent) =>
              scrollToView(event, "#back-to-top-anchor")
            }
            className={classes.backToTop}
            color="secondary"
            size="small"
            aria-label="scroll back to top"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </Grid>
      <AppFooter />
    </Grid>
  );
};

export default App;
