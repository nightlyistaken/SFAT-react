import React, { Component } from "react";
import Button from "@geist-ui/react/esm/button";

class Form extends Component {
  state = {
    firstName: null,
    lastName: null,
  };

  render() {
    return ( 
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
          onClick={() => alert(`Hello ${this.state.firstName} ${this.state.lastName}`)}
        >  
          Submit
        </Button>
      </form>
    );
  }
}

export default Form;
