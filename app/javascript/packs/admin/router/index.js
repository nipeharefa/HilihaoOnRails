import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthenticationLayout, DefaultLayout } from '../layout';

const routers = () => (
  <Switch>
    <Route exact path="/account/*" component={AuthenticationLayout} />
    <Route exact component={DefaultLayout} />
  </Switch>
);

export default routers;
