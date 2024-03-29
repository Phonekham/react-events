import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailInfo from "./EventDetailInfo";
import EventDetailChat from "./EventDetailChat";
import EventDetailedSidebar from "./EventDetailedSidebar";

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return { event };
};

const EventDetailedPage = ({ event }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event}></EventDetailedHeader>
        <EventDetailInfo event={event}></EventDetailInfo>
        <EventDetailChat></EventDetailChat>
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar
          attendees={event.attendees}
        ></EventDetailedSidebar>
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapStateToProps)(EventDetailedPage);
