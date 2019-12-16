import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    passwordRecovery: {
      width: 350,
      padding: 20,
      "@media only screen and (max-width: 600px)": {
        width: "80%",
        padding: "1em"
      }
    }
  };
});

const PasswordRecovery = props => {
  const classes = useStyles();
  const { children } = props;
  return (
    <MUI.Paper elevation={3} className={classes.passwordRecovery}>
      {children}
    </MUI.Paper>
  );
};

export default PasswordRecovery;
