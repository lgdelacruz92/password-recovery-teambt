import React from "react";
import TextFieldTeamBt from "textfield-teambt-fullwidth";
import { validateEmail } from "validate-email-password";

const EmailTextField = props => {
  const [errorText, setErrorText] = React.useState("");
  const { onChange } = props;
  return (
    <TextFieldTeamBt
      errorText={errorText}
      label="Email"
      onChange={e => {
        if (validateEmail(e.currentTarget.value)) {
          setErrorText("");
        } else {
          setErrorText("Invalid email.");
        }
        if (onChange) {
          onChange(e.currentTarget.value);
        }
      }}
    />
  );
};

export default EmailTextField;
