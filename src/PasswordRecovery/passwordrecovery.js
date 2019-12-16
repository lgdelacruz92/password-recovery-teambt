import React from "react";
import * as MUI from "@material-ui/core";
import EmailTextField from "./EmailTextfield";
import SubmitButton from "./SubmitButton";

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
  const [formState, setFormState] = React.useState({
    email: ""
  });
  const { onClick } = props;
  return (
    <MUI.Paper elevation={3} className={classes.passwordRecovery}>
      <EmailTextField
        onChange={value => setFormState({ ...formState, email: value })}
      />
      <SubmitButton onClick={() => onClick(formState)} />
    </MUI.Paper>
  );
};

export default PasswordRecovery;
