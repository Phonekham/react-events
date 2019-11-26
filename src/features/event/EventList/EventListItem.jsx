import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { format, parseISO } from "date-fns";

class EventListItem extends Component {
  render() {
    const {
      hostPhotoURL,
      title,
      date,
      description,
      venue,
      hostedBy,
      attendees
    } = this.props.event;
    const { event, deleteEvent } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={hostPhotoURL} />
              <Item.Content>
                <Item.Header>{title}</Item.Header>
                <Item.Description>Hosted by {hostedBy}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />{" "}
            {date && format(parseISO(date), "EEEE do LLL")} at{" "}
            {format(parseISO(date), "h:mm a")} |
            <Icon name="marker" /> {venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {Event.attendee &&
              attendees.map(attendee => (
                <EventListAttendee
                  key={attendee.id}
                  attendee={attendee}
                ></EventListAttendee>
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{description}</span>
          <Button
            as={Link}
            to={`/events/${event.id}`}
            color="teal"
            floated="right"
            content="View"
          />
          <Button
            onClick={() => deleteEvent(event.id)}
            color="red"
            floated="right"
            content="Delete"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
