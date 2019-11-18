import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import cuid from "cuid";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";

import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  // handleFormOpenToggle = () => {
  //   this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  // };
  handleFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.props.createEvent(newEvent);
    this.setState(() => ({
      isOpen: false
    }));
  };

  handleSelectEvent = event => {
    this.setState({ selectedEvent: event, isOpen: true });
  };

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState(() => ({
      isOpen: false,
      selectedEvent: null
    }));
  };

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            events={events}
            selectEvent={this.handleSelectEvent}
          ></EventList>
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Event"
          ></Button>
          {isOpen && (
            <EventForm
              updateEvent={this.handleUpdateEvent}
              key={selectedEvent ? selectedEvent.id : 0}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              cancelFormOpen={this.handleFormCancel}
            ></EventForm>
          )}
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
