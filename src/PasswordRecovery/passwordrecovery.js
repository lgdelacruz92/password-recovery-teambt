import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    passwordRecovery: {}
  };
});

const PasswordRecovery = props => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.passwordRecovery}>{children}</div>;
};

export default PasswordRecovery;
