import React from "react";
import {
  Typography,
  Grid,
  IconButton,
  makeStyles,
  Avatar,
  Paper,
  Link,
  Grow,
  Fade
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { socialMediaAccountsDetails } from "config/socialMedia";

const useStyles = makeStyles(theme => ({
  main: {
    minHeight: "70vh",
    padding: theme.spacing(3),
    backgroundImage:
      "linear-gradient(#011f2cee, #026492DD), url('static/head-section-background.png')",
    backgroundSize: "cover",
    backgroundPosition: "bottom center"
  },
  avatar: {
    width: theme.spacing(6) * 5,
    height: theme.spacing(6) * 5,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(6) * 4,
      height: theme.spacing(6) * 4
    }
  },
  name: {
    fontWeight: 800,
    letterSpacing: "-0.1rem",
    padding: theme.spacing(2)
  },
  jobTitle: {
    letterSpacing: "-0.1rem"
  },
  socialMediaContainer: {
    padding: theme.spacing(3)
  },
  socialMediaIconButton: {
    background: theme.palette.primary.dark,
    margin: theme.spacing(1),
    "&:hover": {
      background: theme.palette.secondary.main
    }
  }
}));

const HeadSection = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid
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
          <Typography variant="h3" align="center" className={classes.name}>
            Diego García Lozano
          </Typography>
        </Grid>
      </Grow>
      <Grow in timeout={1500}>
        <Grid item>
          <Typography variant="h5" align="center" className={classes.jobTitle}>
            {t("softwareEngineer")}
          </Typography>
        </Grid>
      </Grow>

      <Grid
        item
        container
        alignContent="center"
        alignItems="center"
        justify="center"
        className={classes.socialMediaContainer}
      >
        {Object.entries(socialMediaAccountsDetails).map(
          ([key, { title, href, Icon }]) => (
            <Fade in timeout={2000}>
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
  );
};

export default HeadSection;
