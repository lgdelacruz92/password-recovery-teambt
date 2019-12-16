import React from "react";
import PasswordRecovery from "../../PasswordRecovery";

export default {
  title: "PasswordRecovery"
};

export const passwordRecovery = () => (
  <PasswordRecovery
    successMessage="Success"
    onClick={form => console.log(form)}
  />
);
