import React from "react";
import { Snackbar, SnackbarCloseReason } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { createContext } from "utils/utils";

export type SnackbarSeverity = "error" | "warning" | "info" | "success";

const AUTOHIDE_DURATION_MS = 4000;

type SnackbarMessage = {
  message: string;
  severity?: SnackbarSeverity | undefined;
  key: number;
};

type SnackbarContextType = {
  addSnackbar: (message: string, severity?: SnackbarSeverity) => void;
};

type Props = {
  children: React.ReactNode;
};

export const [useSnackbar, SnackbarContextProvider] = createContext<
  SnackbarContextType
>();

const SnackbarContainer = ({ children }: Props) => {
  const [snackbars, setSnackbars] = React.useState<SnackbarMessage[]>([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState<
    SnackbarMessage | undefined
  >(undefined);

  React.useEffect(() => {
    if (snackbars.length && !messageInfo) {
      setMessageInfo({ ...snackbars[0] });
      setSnackbars((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackbars.length && messageInfo && open) {
      setOpen(false);
    }
  }, [snackbars, messageInfo, open]);

  const handleAddSnackbar = (message: string, severity?: SnackbarSeverity) => {
    setSnackbars((prev) => [
      ...prev,
      { message, severity, key: new Date().getTime() },
    ]);
  };

  const handleClose = (
    _: React.SyntheticEvent,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const contextValue = {
    addSnackbar: handleAddSnackbar,
  };

  return (
    <SnackbarContextProvider value={contextValue}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={AUTOHIDE_DURATION_MS}
        onClose={handleClose}
        onExited={handleExited}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity={messageInfo?.severity}
          onClose={handleClose}
        >
          {messageInfo?.message}
        </Alert>
      </Snackbar>
    </SnackbarContextProvider>
  );
};

export default SnackbarContainer;
