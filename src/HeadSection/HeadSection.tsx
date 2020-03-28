import React from "react";
import {
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
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  main: {
    minHeight: "75vh",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3)
  },
  avatar: {
    width: theme.spacing(6) * 5,
    height: theme.spacing(6) * 5,
    marginBottom: theme.spacing(2)
  },
  name: {
    fontWeight: 800,
    letterSpacing: "-0.1rem",
    padding: theme.spacing(2)
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

type SocialMediaLinkDetails = {
  title: string;
  href: string;
  Icon: React.ReactNode;
};

const socialMediaAccountsLinkDetails: Array<SocialMediaLinkDetails> = [
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/diegogarcialozano/",
    Icon: <FaLinkedinIn />
  },
  {
    title: "Github",
    href: "https://github.com/dglozano",
    Icon: <FaGithub />
  },
  {
    title: "StackOverflow",
    href: "https://stackoverflow.com/users/10648865/dglozano",
    Icon: <FaStackOverflow />
  },
  {
    title: "Twitter",
    href: "https://twitter.com/dglozano95",
    Icon: <FaTwitter />
  },
  {
    title: "Instagram",
    href: "https://instagram.com/diegogarcialozano",
    Icon: <FaInstagram />
  }
];

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
      <Grid item>
        <Avatar
          alt="Diego Garcia Lozano"
          src="/static/picture-square.png"
          className={classes.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" align="center" className={classes.name}>
          Diego Garcia Lozano
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" align="center">
          {t("softwareEngineer")}
        </Typography>
      </Grid>
      <Grid
        item
        container
        alignContent="center"
        alignItems="center"
        justify="center"
        className={classes.socialMediaContainer}
      >
        {socialMediaAccountsLinkDetails.map(({ title, href, Icon }, index) => (
          <IconButton
            title={title}
            component="a"
            href={href}
            target="_blank"
            key={index}
            className={classes.socialMediaIconButton}
          >
            {Icon}
          </IconButton>
        ))}
      </Grid>
    </Grid>
  );
};

export default HeadSection;
