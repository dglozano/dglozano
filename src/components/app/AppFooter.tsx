import React from "react";
import {
  Grid,
  Link,
  makeStyles,
  Paper,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { FaHeart as HeartIcon } from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";

import { darkTheme } from "config/themes";
import { socialMediaAccountsDetails } from "config/socialMedia";
import { REPO_NAME } from "config/constants";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.primary.dark,
    padding: theme.spacing(2),
    ...theme.mixins.toolbar,
  },
  heartIcon: {
    color: theme.palette.secondary.main,
  },
}));

const AppFooter = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid
        container
        alignItems="center"
        component={Paper}
        square
        className={classes.footer}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" align="center">
            <Trans i18nKey="madeWithLoveBy">
              Made with <HeartIcon className={classes.heartIcon} /> by
            </Trans>
            &nbsp;
            <Link
              href={socialMediaAccountsDetails["github"].href}
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="hover"
            >
              <strong>
                @{socialMediaAccountsDetails["github"].accountName}
              </strong>
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" align="center">
            {t("codeAvailableIn")}&nbsp;
            <Link
              href={`${socialMediaAccountsDetails["github"].href}/${REPO_NAME}`}
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="hover"
            >
              <strong>Github</strong>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default AppFooter;
