import React, { Component } from "react";
import useToasts from "@geist-ui/react/esm/use-toasts";

// lib
export default (Component) => {
  return (props) => {
    const [_, setToast] = useToasts();
    return <Component setToast={setToast} {...props} />;
  };
};
() => {
  const Child = () => (
    <>
      <h2>Hello, Everyone.</h2>
      <p>This is a simulated page, you can click anywhere to close it.</p>
    </>
  );
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)} auto>
        Show Page
      </Button>
      <MockPage visible={visible} onClose={() => setVisible(false)}>
        <Page>
          <Child />
        </Page>
      </MockPage>
    </>
  );
};
