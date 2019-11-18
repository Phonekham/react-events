import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import cuid from "cuid";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";

import EventList from "../EventList/EventList";

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.props.createEvent(newEvent);
  };

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
  };

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            events={events}
          ></EventList>
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
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
  events: state.events
});

export default connect(mapStateToProps, actions)(EventDashboard);
