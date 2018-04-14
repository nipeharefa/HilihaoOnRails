import _ from 'lodash';
import React, { Fragment } from 'react';
import Loadable from 'react-loadable';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import SiderComponent from '../components/Sider';
import AuthenticationNavigation from '../router/nav';
import { userIsAuthenticated } from '../middleware/auth';

const Header = Loadable({
  loader: () => import('../components/Header/header'),
  loading: () => (<div></div>),
});

const { Footer, Content } = Layout;

const routes = _.map(AuthenticationNavigation, ({ component, path }, index) => (
  <Route exact path={path} component={userIsAuthenticated(component)} key={index} />
));
const Authentication = () => (
  <Fragment>
    <div className="body-container">
      <Layout className="ant-layout-has-sider">
        <SiderComponent />
        <Layout>
          <Header />
          <Content>
            <div style={{ minHeight: 360 }}>
              <Switch>
                {routes}
                <Redirect to="/" />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
    <Footer style={{ textAlign: 'center' }}>BNKP Hilihao &copy; 2018</Footer>
  </Fragment>
);

export default Authentication;
