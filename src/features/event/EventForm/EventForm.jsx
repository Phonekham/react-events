import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import cuid from "cuid";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";

const actions = {
  createEvent,
  updateEvent
};

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {
    title: "",
    date: "",
    city: "",
    hostedBy: "",
    venue: ""
  };
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return { event };
};

class EventForm extends Component {
  handleFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
      this.props.history.push(`/events/${this.state.id}`);
    } else {
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: "/assets/user.png"
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events}`);
    }
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details"></Header>
            <Form onSubmit={this.handleFormSubmit}>
              <Field
                name="title"
                component={TextInput}
                placeholder="Event Title"
              ></Field>
              <Field
                name="category"
                component={TextInput}
                placeholder="category"
              ></Field>
              <Field
                name="description"
                component={TextArea}
                placeholder="description"
                rows={3}
              ></Field>
              <Header
                sub
                color="teal"
                content="Event Location Details"
              ></Header>
              <Field
                name="city"
                component={TextInput}
                placeholder="city"
              ></Field>
              <Field
                name="venue"
                component={TextInput}
                placeholder="venue"
              ></Field>
              <Field
                name="date"
                component={TextInput}
                placeholder="date"
              ></Field>
              <Button positive type="submit">
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(reduxForm({ form: "eventForm" })(EventForm));
