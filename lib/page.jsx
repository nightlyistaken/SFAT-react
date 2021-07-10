import React, { Component } from "react";
import Page from "@geist-ui/react/esm/page";

// lib
export default (Component) => {
  return (props) => {
    return (
      <React.Fragment>
        <Page>
          <Component {...props} />
        </Page>
      </React.Fragment>
    );
  };
};
