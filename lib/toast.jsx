import React, { Component } from "react";
import useToasts from "@geist-ui/react/esm/use-toasts";

// lib
export default (Component) => {
  return (props) => {
    const [_, setToast] = useToasts();
    return <Component setToast={setToast} {...props} />;
  };
};
