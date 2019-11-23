import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const ComponentLoading = ({ inverted = false }) => {
  return (
    <Dimmer inverted={inverted} active={true}>
      <Loader content="Loading..."></Loader>
    </Dimmer>
  );
};

export default ComponentLoading;
