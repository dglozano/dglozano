import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  IconButton,
  makeStyles,
  Avatar,
  Paper
} from "@material-ui/core";
import {
  FaLinkedinIn,
  FaGithub,
  FaStackOverflow,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

const useStyles = makeStyles(theme => ({
  appBar: {
    background: theme.palette.primary.dark
  },
  main: {
    height: "75vh",
    backgroundColor: theme.palette.primary.main
  },
  avatar: {
    width: theme.spacing(6) * 5,
    height: theme.spacing(6) * 5
  },
  name: {
    padding: theme.spacing(2)
  },
  social: {
    padding: theme.spacing(3),
    "& > .MuiIconButton-root": {
      background: theme.palette.primary.dark,
      margin: theme.spacing(1),
      "&:hover": {
        background: theme.palette.secondary.main
      }
    }
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar></Toolbar>
      </AppBar>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        component={Paper}
        square
        className={classes.main}
      >
        <Grid item>
          <Avatar
            alt="Diego Garcia Lozano"
            src="/static/picture-square.png"
            className={classes.avatar}
          />
        </Grid>
        <Grid item className={classes.name}>
          <Typography variant="h4">Diego Garcia Lozano</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">Software Enginner</Typography>
        </Grid>
        <Grid item justify="center" className={classes.social}>
          <IconButton
            title="Linkedin"
            component="a"
            href="https://www.linkedin.com/in/diegogarcialozano/"
            target="_blank"
          >
            <FaLinkedinIn />
          </IconButton>
          <IconButton
            title="Github"
            component="a"
            href="https://github.com/dglozano"
            target="_blank"
          >
            <FaGithub />
          </IconButton>
          <IconButton
            title="StackOverflow"
            component="a"
            href="https://stackoverflow.com/users/10648865/dglozano"
            target="_blank"
          >
            <FaStackOverflow />
          </IconButton>
          <IconButton
            title="Twitter"
            component="a"
            href="https://twitter.com/dglozano95"
            target="_blank"
          >
            <FaTwitter />
          </IconButton>
          <IconButton
            title="Instagram"
            component="a"
            href="https://instagram.com/diegogarcialozano"
            target="_blank"
          >
            <FaInstagram />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
