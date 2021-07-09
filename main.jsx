import * as React from "react";
import * as ReactDOM from "react-dom";

import { GeistProvider, CssBaseline } from "@geist-ui/react";
import Form from "./components/form";

ReactDOM.render(
  <GeistProvider //themeType="dark"
  >
    <CssBaseline />
    <Form />
  </GeistProvider>,
  document.getElementById("root")
);
