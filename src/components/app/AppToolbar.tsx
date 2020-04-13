import React from "react";
import {
  AppBar,
  makeStyles,
  ThemeProvider,
  Toolbar,
  Grid,
  Button,
  Typography,
  useMediaQuery,
  Theme,
} from "@material-ui/core";
import DownloadIcon from "@material-ui/icons/GetApp";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { useTranslation } from "react-i18next";

import { darkTheme } from "config/themes";
import BritishFlag from "components/icons/BritishFlag";
import NorwayFlag from "components/icons/NorwayFlag";
import SpanishFlag from "components/icons/SpanishFlag";

const cvPdf = require("static/CV-en.pdf");

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.primary.dark,
    ...theme.mixins.toolbar,
  },
}));

const AppToolbar = () => {
  const isXsScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("xs")
  );
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.languages[0]);

  const handleLanguageChange = (
    _event: React.MouseEvent<HTMLElement>,
    newLanguage: string | null
  ) => {
    if (newLanguage !== null) {
      setLanguage(newLanguage);
      i18n.changeLanguage(newLanguage);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <ToggleButtonGroup
                size="small"
                value={language}
                exclusive
                onChange={handleLanguageChange}
              >
                <ToggleButton value="en">
                  <BritishFlag />
                </ToggleButton>
                <ToggleButton value="es">
                  <SpanishFlag />
                </ToggleButton>
                <ToggleButton value="no">
                  <NorwayFlag />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                component="a"
                download
                href={String(cvPdf)}
                target="_blank"
                startIcon={<DownloadIcon />}
              >
                <Typography variant="body2">
                  <strong>{!isXsScreen && `${t("download")} `}CV</strong>
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default AppToolbar;
