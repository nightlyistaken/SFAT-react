import React, { Component } from "react";
import Button from "@geist-ui/react/esm/button";
import Table from "./table";
import Save from "@geist-ui/react-icons/save";
import Display from "@geist-ui/react/esm/display";
import Text from "@geist-ui/react/esm/text";
import Tag from "@geist-ui/react/esm/tag";
import Spacer from "@geist-ui/react/esm/spacer";
import { Container } from "@geist-ui/react";
import Input from "@geist-ui/react/esm/input";
import withToasts from "../lib/toast";

/** Welp thats a lot of work  */

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    confirmedData: localStorage.getItem("confirmedData")
      ? JSON.parse(localStorage.getItem("confirmedData"))
      : [],
  };

  render() {
    return (
      <React.Fragment>
        <Display>
          <Text h1>
            Name,Class Form in React
            <Tag size="large" type="lite">
              V.1.2
            </Tag>
          </Text>
          <Text h5>SFAT - Simple and Easy form maker. </Text>
        </Display>

        <form>
          <Container>
            <Input
              type="text"
              placeholder="Firstname"
              value={this.state.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            />
            <br />
            <Input
              type="text"
              placeholder="Lastname"
              value={this.state.Lastname}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
            <Spacer y={4} />
            <Button
              disabled={!this.state.firstName && !this.state.lastName}
              icon={<Save />}
              auto
              onClick={() => {
                const confirmedData = [
                  ...this.state.confirmedData,
                  {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                  },
                ];

                localStorage.setItem(
                  "confirmedData",
                  JSON.stringify(confirmedData)
                );

                this.setState({ confirmedData });
              }}
            >
              Submit
            </Button>
          </Container>
          <Table data={this.state.confirmedData} />
          <Button
            auto
            onClick={() => {
              this.props.setToast({ text: "Deleted table", type: "error" });
              this.setState({ confirmedData: [] });
              localStorage.removeItem("confirmedData");
            }}
          >
            Delete table
          </Button>
        </form>
      </React.Fragment>
    );
  }
}
export default withToasts(Form);
// End?
