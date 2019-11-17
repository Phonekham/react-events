import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import NavBar from "../../features/nav/NavBar/NavBar";
import HomePage from "../../features/home/HomePage";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import TestComponent from "../../features/testarea/TestComponent";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage}></Route>
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar></NavBar>
              <Container className="main">
                <Route exact path="/events" component={EventDashboard}></Route>
                <Route path="/events/:id" component={EventDetailedPage}></Route>
                <Route path="/people" component={PeopleDashboard}></Route>
                <Route path="/profile/:id" component={UserDetailedPage}></Route>
                <Route path="/settings" component={SettingsDashboard}></Route>
                <Route path="/createEvent" component={EventForm}></Route>
                <Route path="/test" component={TestComponent}></Route>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
