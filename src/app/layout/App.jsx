import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";

import NavBar from "../../features/nav/NavBar/NavBar";
import HomePage from "../../features/home/HomePage";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import TestComponent from "../../features/testarea/TestComponent";
import ModalManager from "../../features/modals/ModalManager";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <ModalManager></ModalManager>
        <Route exact path="/" component={HomePage} />
        <NavBar></NavBar>
        <Container className="main">
          <Switch key={this.props.location.key}>
            <Route exact path="/events" component={EventDashboard}></Route>
            <Route path="/events/:id" component={EventDetailedPage}></Route>
            <Route path="/people" component={PeopleDashboard}></Route>
            <Route path="/profile/:id" component={UserDetailedPage}></Route>
            <Route path="/settings" component={SettingsDashboard}></Route>
            <Route
              path={["/createEvent", "/manage/:id"]}
              component={EventForm}
            ></Route>
            <Route path="/test" component={TestComponent}></Route>
          </Switch>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(App);
