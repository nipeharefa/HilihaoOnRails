import _ from 'lodash';
import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import AuthenticationNavigation from '../router/nav';
import { userIsAuthenticated } from '../middleware/auth';

const { Footer } = Layout;

const routes = _.map(AuthenticationNavigation, ({ component, path }, index) => (
  <Route exact path={path} component={userIsAuthenticated(component)} key={index} />
));
const Authentication = () => (
  <Fragment>
    <div className="body-container">
      <Switch>
        {routes}
        <Redirect to="/" />
      </Switch>
    </div>
    <Footer style={{ textAlign: 'center' }}>BNKP Hilihao &copy; 2018</Footer>
  </Fragment>
);

export default Authentication;
