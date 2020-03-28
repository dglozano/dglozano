import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { blueGrey, deepOrange } from "@material-ui/core/colors";

import "i18n";
import App from "App";
import * as serviceWorker from "serviceWorker";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: blueGrey[800] },
    secondary: { main: deepOrange[400] }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
