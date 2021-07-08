import React, { Component } from "react";
import UITable from "@geist-ui/react/esm/table";
import Text from "@geist-ui/react/esm/text";
import Card from "@geist-ui/react/esm/card";



class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UITable data={this.props.data}>
          <UITable.Column prop="firstName"></UITable.Column>
          <UITable.Column prop="lastName"></UITable.Column>
        </UITable>
        <Card hoverable>
  <p><Text h6>hello :3  More upcoming soon :D (this is just a test not a final product)</Text>.</p>
</Card>
        
      </div>
    );
  }
}

export default Table;
