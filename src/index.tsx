import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import App from "components/app/App";
import "config/translations/_i18n";
import * as serviceWorker from "serviceWorker";
import { lightTheme } from "config/themes";
import SnackbarContainer from "components/snackbar/SnackbarContext";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={lightTheme}>
      <SnackbarContainer>
        <App />
      </SnackbarContainer>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
