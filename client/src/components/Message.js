import React from "react";
import { useAlert } from "react-alert";

const Message = ({ variant, children }) => {
  const Alert = useAlert();
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
