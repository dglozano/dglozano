import React from "react";
import {
  Avatar,
  Fade,
  Grid,
  Grow,
  IconButton,
  Link,
  makeStyles,
  Paper,
  Typography,
  ThemeProvider,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { socialMediaAccountsDetails } from "config/socialMedia";
import { darkTheme } from "config/themes";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "60vh",
    padding: theme.spacing(3),
    backgroundImage: `linear-gradient(${theme.dglozano.palette.darkBlue}, ${theme.dglozano.palette.lightBlue}), url('static/head-section-background.png')`,
    backgroundSize: "cover",
    backgroundPosition: "bottom center",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      minHeight: "50vh",
    },
  },
  avatar: {
    width: theme.spacing(6) * 5,
    height: theme.spacing(6) * 5,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(6) * 4,
      height: theme.spacing(6) * 4,
    },
  },
  name: {
    fontWeight: 800,
    letterSpacing: "-0.1rem",
    padding: theme.spacing(2),
  },
  jobTitle: {
    letterSpacing: "-0.1rem",
  },
  socialMediaContainer: {
    padding: `${theme.spacing(3)}px 0px`,
  },
  socialMediaIconButton: {
    background: theme.palette.primary.dark,
    margin: theme.spacing(1),
    "&:hover": {
      background: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(18),
      padding: 10,
    },
  },
}));

const HeadSection = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid
        id="back-to-top-anchor"
        container
        direction="column"
        alignItems="center"
        justify="center"
        component={Paper}
        square
        className={classes.main}
      >
        <Fade in timeout={1000}>
          <Grid item>
            <Avatar
              alt="Diego Garcia Lozano"
              src="/static/picture-square.png"
              className={classes.avatar}
            />
          </Grid>
        </Fade>
        <Grow in timeout={1500}>
          <Grid item>
            <Typography variant="h2" align="center" className={classes.name}>
              Diego García Lozano
            </Typography>
          </Grid>
        </Grow>
        <Grow in timeout={1500}>
          <Grid item>
            <Typography
              variant="h4"
              align="center"
              className={classes.jobTitle}
            >
              {t("softwareEngineer")}
            </Typography>
          </Grid>
        </Grow>

        <Grid
          id="social-media"
          item
          container
          alignContent="center"
          alignItems="center"
          justify="center"
          className={classes.socialMediaContainer}
        >
          {Object.entries(socialMediaAccountsDetails).map(
            ([key, { title, href, Icon }]) => (
              <Fade in timeout={2000} key={key}>
                <IconButton
                  title={title}
                  component={Link}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  key={key}
                  className={classes.socialMediaIconButton}
                >
                  <Icon />
                </IconButton>
              </Fade>
            )
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default HeadSection;
