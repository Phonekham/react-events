import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";

import NavBar from "../../features/nav/NavBar/NavBar";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <NavBar></NavBar>
        <Container className="main">
          <EventDashboard></EventDashboard>
        </Container>
      </Fragment>
    );
  }
}

export default App;
