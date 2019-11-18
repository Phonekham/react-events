import React from "react";
import { Grid } from "semantic-ui-react";

import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailInfo from "./EventDetailInfo";
import EventDetailChat from "./EventDetailChat";
import EventDetailedSidebar from "./EventDetailedSidebar";

const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader></EventDetailedHeader>
        <EventDetailInfo></EventDetailInfo>
        <EventDetailChat></EventDetailChat>
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar></EventDetailedSidebar>
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailedPage;
