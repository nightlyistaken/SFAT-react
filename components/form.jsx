import React, { Component } from "react";
import Button from "@geist-ui/react/esm/button";
import Table from "./table";
import { Settings } from "@geist-ui/react-icons";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    confirmedData: localStorage.getItem("confirmedData") ? JSON.parse(localStorage.getItem("confirmedData")) : [],
  };
  
  render() {
    return (
      <React.Fragment>
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
            icon={<Settings />}
            onClick={() => {
              const confirmedData = [
                ...this.state.confirmedData,
                {
                  firstName: this.state.firstName,
                  lastName: this.state.lastName,
                },
              ];

              localStorage.setItem("confirmedData", JSON.stringify(confirmedData));
              
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
