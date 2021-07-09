import React, { Component } from "react";
import Button from "@geist-ui/react/esm/button";
import Table from "./table";
import { Settings } from "@geist-ui/react-icons";
import Save from '@geist-ui/react-icons/save'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Display from '@geist-ui/react/esm/display'
import Text from "@geist-ui/react/esm/text";
import Tag from "@geist-ui/react/esm/tag";
import Badge from "@geist-ui/react/esm/badge";
{/** Welp thats a lot of work  */}
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
        <Display >
        <Text h1>Name,Class Form (React)<Tag size="large" type="lite">V.1.0(Beta)</Tag></Text>
        <Text h5>SFAT Simple and Easy form maker. </Text>


        </Display >
        
        <form>
          <input
            type="text"
            placeholder="Firstname"
            value={this.state.firstName}
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Lastname"
            value={this.state.Lastname}
            onChange={(e) => this.setState({ lastName: e.target.value })}
          />
          <Button
            disabled={!this.state.firstName && !this.state.lastName}
            icon={<Save />}
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
        </form>
        <Table data={this.state.confirmedData} />
        
      </React.Fragment>
    );
  }
}

export default Form;
