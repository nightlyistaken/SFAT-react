import * as React from "react";
import * as ReactDOM from "react-dom";

import { GeistProvider, CssBaseline } from '@geist-ui/react'
import Form from "./components/form";
import Table from "./components/table";

ReactDOM.render(
    <GeistProvider>
    <CssBaseline /> 
    <Form />
    <Table />
    </GeistProvider>
, document.getElementById("root"));
