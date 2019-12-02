import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import { Route, Redirect, Switch } from "react-router";

import SettingsNav from "./SettingsNav";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";
import { updatePassword } from "../../auth/authActions";

const actions = {
  updatePassword
};

const SettingsDashboard = ({ updatePassword }) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          {/* <Redirect exact from="/settings" to="settings/basic"></Redirect> */}
          <Route path="/settings/basic" component={BasicPage}></Route>
          <Route path="/settings/about" component={AboutPage}></Route>
          <Route path="/settings/photos" component={PhotosPage}></Route>
          <Route
            path="/settings/account"
            render={() => (
              <AccountPage updatePassword={updatePassword}></AccountPage>
            )}
          ></Route>
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav></SettingsNav>
      </Grid.Column>
    </Grid>
  );
};

export default connect(null, actions)(SettingsDashboard);
