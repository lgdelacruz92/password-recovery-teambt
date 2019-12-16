import React from "react";
import * as MUI from "@material-ui/core";
import EmailTextField from "@bit/lgdelacruz92.team-bt.emailtextfield";
import SubmitButton from "./SubmitButton";
import SuccessMessage from "./SuccessMessage";

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
  const { onClick, successMessage } = props;
  return (
    <MUI.Paper elevation={3} className={classes.passwordRecovery}>
      <SuccessMessage>{successMessage}</SuccessMessage>
      <EmailTextField
        onChange={value => setFormState({ ...formState, email: value })}
      />
      <SubmitButton onClick={() => onClick(formState)} />
    </MUI.Paper>
  );
};

export default PasswordRecovery;
