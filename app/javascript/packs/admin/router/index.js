import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthenticationLayout } from '../layout';

const routers = () => (
  <Switch>
    <Route exact component={AuthenticationLayout} />
  </Switch>
);

export default routers;
