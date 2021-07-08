import React, { Component } from "react";
import UITable from "@geist-ui/react/esm/table";
import Text from "@geist-ui/react/esm/text";

class Table extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div>
        <UITable data={this.props.data}>
          <UITable.Column prop="firstName"></UITable.Column>
          <UITable.Column prop="lastName"></UITable.Column>
        </UITable>
        <Text h1>hello :3 this is test</Text>
      </div>
    );
  }
}

export default Table;
