import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";

import EventList from "../EventList/EventList";
import ComponentLoading from "../../../app/layout/ComponentLoading";
import EventActivity from "../EventActivity/EventActivity";

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events, loading } = this.props;
    if (loading) return <ComponentLoading></ComponentLoading>;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            events={events}
          ></EventList>
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity></EventActivity>
        </Grid.Column>
      </Grid>
    );
  }
}

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};

const mapStateToProps = state => ({
  events: state.events,
  loading: state.async.loading
});

export default connect(mapStateToProps, actions)(EventDashboard);
