import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    submitButton: {
      marginTop: "0.8em"
    }
  };
});

const SubmitButton = props => {
  const classes = useStyles();
  const { onClick } = props;
  const ref = React.useRef();

  React.useEffect(() => {
    const onKeyDown = e => {
      if (e.key === "Enter") {
        onClick();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClick]);
  return (
    <MUI.Button
      ref={ref}
      onClick={onClick}
      className={classes.submitButton}
      variant="contained"
      fullWidth
      color="primary"
    >
      SUBMIT
    </MUI.Button>
  );
};

export default SubmitButton;
