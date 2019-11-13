import React, { Component } from "react";
import { Segment, Item, Icon, List, Image, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    const {
      hostPhotoURL,
      title,
      date,
      category,
      description,
      city,
      venue,
      hostedBy,
      attendees
    } = this.props.event;
    const { event, selectEvent } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={hostPhotoURL} />
              <Item.Content>
                <Item.Header>{title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {date} |
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
            onClick={() => selectEvent(event)}
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
