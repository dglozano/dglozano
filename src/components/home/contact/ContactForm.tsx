import React, { useState } from "react";
import { Button, Grid, Paper, TextField, makeStyles } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useTranslation } from "react-i18next";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";

import { encode } from "utils/utils";

const fieldValidation: {
  [key: string]: (value: string) => string;
} = {
  email: (value: string) => {
    if (!value.match(/^.+@.+\..+$/)) return "emailValidationError";
    return "";
  },
  name: (value: string) => {
    if (!value.length) return "nameValidationError";
    return "";
  },
  message: (value: string) => {
    if (value.length < MESSAGE_MIN_LENGTH) return "messageValidationError";
    return "";
  },
};

const MESSAGE_MIN_LENGTH = 20;

const initialFormState = {
  email: {
    value: "",
    error: "",
  },
  name: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

const useStyles = makeStyles((theme) => ({
  formPaper: {
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  formSubmitContainer: {
    marginTop: theme.spacing(2),
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [formState, setFormState] = useState(initialFormState);
  const [snackbarState, setSnackbarState] = useState<
    "success" | "error" | "closed"
  >("closed");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const error = fieldValidation.hasOwnProperty(name)
      ? fieldValidation[name](value)
      : "";

    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        value,
        error,
      },
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact", // this is required to help Netlify's post processor bots and matches the form name defined in index.html
        name: formState.name.value,
        email: formState.email.value,
        message: formState.message.value,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response.json());
        }
        setSnackbarState("success");
        setFormState({ ...initialFormState });
      })
      .catch((error) => {
        setSnackbarState("error");
        console.log(error);
      });
  };

  const isFormInvalid = Object.values(formState).some(
    (field) => !field.value || !!field.error
  );

  return (
    <Paper elevation={4} className={classes.formPaper}>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              autoComplete="off"
              error={!!formState.email.error}
              helperText={t(formState.email.error)}
              label={t("email")}
              margin="normal"
              name="email"
              onChange={handleChange}
              size="small"
              value={formState.email.value}
              variant="outlined"
              inputProps={{ maxLength: 255 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              autoComplete="off"
              error={!!formState.name.error}
              helperText={t(formState.name.error)}
              label={t("name")}
              margin="normal"
              name="name"
              onChange={handleChange}
              size="small"
              value={formState.name.value}
              variant="outlined"
              inputProps={{ maxLength: 255 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              required
              autoComplete="off"
              error={!!formState.message.error}
              helperText={t(formState.message.error, {
                count: MESSAGE_MIN_LENGTH,
              })}
              label={t("message")}
              margin="normal"
              name="message"
              onChange={handleChange}
              rows={8}
              size="small"
              value={formState.message.value}
              variant="outlined"
              inputProps={{ maxLength: 2000 }}
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            className={classes.formSubmitContainer}
            justify="center"
          >
            <Grid item sm={6} xs={12}>
              <Button
                fullWidth
                color="secondary"
                disabled={isFormInvalid}
                endIcon={<SendIcon />}
                variant="contained"
                type="submit"
              >
                <strong>{t("send")}</strong>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
      {/*TODO: Refactor */}
      <Snackbar
        open={snackbarState === "success"}
        autoHideDuration={4000}
        onClose={() => setSnackbarState("closed")}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={() => setSnackbarState("closed")}
        >
          {t("formSuccess")}
        </Alert>
      </Snackbar>
      <Snackbar
        open={snackbarState === "error"}
        autoHideDuration={4000}
        onClose={() => setSnackbarState("closed")}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity="error"
          onClose={() => setSnackbarState("closed")}
        >
          {t("formError")}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default ContactForm;
