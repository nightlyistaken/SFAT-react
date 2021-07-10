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
              V.1.3
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
                // filter if firstName and lastName already exists
                const filtered = this.state.confirmedData.find(
                  (item) =>
                    item.firstName === this.state.firstName &&
                    item.lastName === this.state.lastName
                );
                // if exists, show a toast
                if (filtered) {
                  this.props.setToast({
                    text: "Name already exists",
                    type: "error",
                  });
                  return;
                }
                // if not, add to confirmedData and save to localStorage
                const confirmedData = [
                  ...this.state.confirmedData,
                  {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                  },
                ];
                // save to localStorage
                localStorage.setItem(
                  "confirmedData",
                  JSON.stringify(confirmedData)
                );
                // set state to confirmedData
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
