import React from "react";
import {
  Container,
  Grid,
  Link,
  Paper,
  Typography,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core";
import { useTranslation, Trans } from "react-i18next";

import ContactForm from "components/home/contact/ContactForm";
import { darkTheme } from "config/themes";
import { scrollToView } from "utils/utils";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: `${theme.spacing(9)}px ${theme.spacing(2)}px`,
    background: theme.dglozano.palette.darkBlue,
  },
  title: {
    paddingBottom: theme.spacing(2),
  },
  text: {
    letterSpacing: "0.05em",
    paddingBottom: theme.spacing(2),
  },
  socialMediaLink: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const ContactSection = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid
        container
        alignItems="center"
        component={Paper}
        square
        className={classes.main}
        elevation={0}
      >
        <Container maxWidth="sm">
          <Grid
            container
            justify="center"
            alignContent="center"
            direction="column"
          >
            <Typography variant="h1" align="center" className={classes.title}>
              {t("letsTalk")}
            </Typography>
            <Typography align="center" className={classes.text}>
              <Trans i18nKey="letsTalkText">
                Please don't hesitate to
                <Link
                  href="mailto:diegogarcialozano95@gmail.com"
                  color="inherit"
                  underline="hover"
                >
                  <strong>send me an email</strong>
                </Link>
                , add me on any of my
                <Link
                  component="span"
                  onClick={(event: React.MouseEvent) =>
                    scrollToView(event, "#back-to-top-anchor")
                  }
                  variant="body1"
                  underline="hover"
                  color="inherit"
                  className={classes.socialMediaLink}
                >
                  <strong>social media accounts</strong>
                </Link>
                or fill out this form and I'll get back to you!
              </Trans>
            </Typography>

            <ContactForm />
          </Grid>
        </Container>
      </Grid>
    </ThemeProvider>
  );
};

export default ContactSection;
