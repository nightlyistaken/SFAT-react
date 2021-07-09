import React, { Component } from "react";
import UITable from "@geist-ui/react/esm/table";
import Text from "@geist-ui/react/esm/text";
import User from "@geist-ui/react/esm/user";
import Button from "@geist-ui/react/esm/button";
import useToasts from "@geist-ui/react/esm/use-toasts";
import Card from "@geist-ui/react/esm/card";

const withToasts = (Component) => {
  return (props) => {
    const [_, setToast] = useToasts();
    return <Component setToast={setToast} {...props} />
  }
}



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
        <Text h1>hello :3 this is test </Text>
        <User src="#" name="breadA (dhairy-online)">
        JavaScript engineer
        </User>
        <User src="#" name="Divy (littledivy)">
        JavaScript engineer
        </User>
        <Button onClick={() => { this.props.setToast({ text: 'Hello' }) }}> </Button>          
        <Card hoverable>
          <p><Text h6>hello :3  More upcoming soon :D (this is just a test not a final product)</Text>.</p>
        </Card>
      </div>
    );
  }
}

export default withToasts(Table);
