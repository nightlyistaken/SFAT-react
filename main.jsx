import * as React from "react";
import * as ReactDOM from "react-dom";
import Toggle from "@geist-ui/react/esm/toggle";
import Text from "@geist-ui/react/esm/text";

import { GeistProvider, CssBaseline } from "@geist-ui/react";
import Form from "./components/form";
import withPage from "./lib/page";

const PageForm = withPage(Form);

class App extends React.Component {
  state = {
    theme: "light",
  };

  render() {
    return (
      <React.Fragment>
        <GeistProvider themeType={this.state.theme}>
          <CssBaseline />
          <Text>
            Switch Themes:
            <Toggle
              onChange={(e) =>
                this.setState({ theme: e.target.checked ? "dark" : "light" })
              }
            />
          </Text>
          <PageForm />
        </GeistProvider>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
