import React from "react";
import {
  Button,
  CircularProgress,
  makeStyles,
  ButtonProps,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  circularProgress: {
    marginLeft: theme.spacing(1),
  },
}));

interface Props extends ButtonProps {
  loading: boolean;
}

const LoadingButton = ({
  loading,
  children,
  endIcon,
  startIcon,
  disabled,
  ...rest
}: Props) => {
  const classes = useStyles();

  return (
    <Button
      disabled={loading || disabled}
      startIcon={loading ? undefined : startIcon}
      endIcon={loading ? undefined : endIcon}
      {...rest}
    >
      {loading ? (
        <CircularProgress
          size={20}
          color="primary"
          classes={{
            root: classes.circularProgress,
          }}
        />
      ) : (
        children
      )}
    </Button>
  );
};

export default LoadingButton;
