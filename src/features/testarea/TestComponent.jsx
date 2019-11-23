import React, { Component } from "react";
import { connect } from "react-redux";
import { decrementAsync, incrementAsync } from "./testActions";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlace";
import { openModal } from "../modals/modalActions";

const mapStateToProps = state => ({
  data: state.test.data,
  loading: state.async.loading,
  buttonName: state.async.elementName
});

const actions = {
  incrementAsync,
  decrementAsync,
  openModal
};

class TestComponent extends Component {
  render() {
    const {
      data,
      incrementAsync,
      decrementAsync,
      openModal,
      loading,
      buttonName
    } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The answer is {data}</h3>
        <Button
          name="increment"
          loading={buttonName === "increment" && loading}
          onClick={e => incrementAsync(e.target.name)}
          positive
          content="Increment"
        ></Button>
        <Button
          name="decrement"
          loading={buttonName === "decrement" && loading}
          onClick={e => decrementAsync(e.target.name)}
          negative
          content="Decrement"
        ></Button>
        <Button
          onClick={() => openModal("TestModal", { data: 42 })}
          color="teal"
          content="Open modal"
        ></Button>

        <br></br>
        {/* <TestPlaceInput></TestPlaceInput> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(TestComponent);
