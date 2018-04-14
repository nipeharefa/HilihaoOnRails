import _ from 'lodash';
import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { userIsNotAuthenticated } from '../middleware/auth';
import AuthenticationNavigation from '../router/nav';

const { Footer } = Layout;

const routes = _.map(AuthenticationNavigation, ({ component, path }, index) => (
  <Route exact path={path} component={userIsNotAuthenticated(component)} key={index} />
));
const Authentication = () => (
  <Fragment>
    <div className="body-container">
      <Switch>
        {routes}
        <Redirect to="/" />
      </Switch>
    </div>
    <Footer style={{ textAlign: 'center' }}>Stocard Wallet &copy; 2018</Footer>
  </Fragment>
);

export default Authentication;
