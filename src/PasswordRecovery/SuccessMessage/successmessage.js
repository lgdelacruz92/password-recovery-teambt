import React from "react";
import * as MUI from "@material-ui/core";
const useStyles = MUI.makeStyles(theme => {
  return {
    successMessage: {
      color: "green"
    }
  };
});

const SuccessMessage = props => {
  const { children } = props;
  const classes = useStyles();
  return (
    <MUI.Typography align="center" className={classes.successMessage}>
      {children}
    </MUI.Typography>
  );
};

export default SuccessMessage;
