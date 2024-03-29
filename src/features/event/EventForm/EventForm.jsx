import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import cuid from "cuid";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";

import { createEvent, updateEvent } from "../eventActions";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";

const actions = {
  createEvent,
  updateEvent
};

const validate = combineValidators({
  title: isRequired({ message: "The event title is required" }),
  category: isRequired({ message: "The event category is required" }),
  description: composeValidators(
    isRequired({ message: "The event description is required" }),
    hasLengthGreaterThan(4)({
      message: "The event description need than 4 chars"
    })
  )(),
  city: isRequired("city is required"),
  venue: isRequired("venue is required"),
  date: isRequired("date")
});

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return { initialValues: event };
};

class EventForm extends Component {
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostedBy: "Phone"
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events/${newEvent.id}`);
    }
  };

  render() {
    const {
      history,
      initialValues,
      invalid,
      submitting,
      pristine
    } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details"></Header>
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                component={TextInput}
                placeholder="Event Title"
              ></Field>
              <Field
                name="category"
                component={SelectInput}
                placeholder="category"
                options={category}
                multiple={true}
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
                // dateFormat="dd LLL yyyy h:mm a"
                // timeFormat="HH:mm"
                placeholder="Event Date"
              ></Field>
              <Button
                positive
                type="submit"
                disabled={invalid || submitting || pristine}
              >
                Submit
              </Button>
              <Button
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push("/events")
                }
                type="button"
              >
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
)(reduxForm({ form: "eventForm", validate })(EventForm));
