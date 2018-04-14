import React from 'react';
import Loadable from 'react-loadable';
import { Container } from '../screens/authentication';
// import JemaatComponent from '../screens/congregtion';

const JemaatComponent = Loadable({
  loader: () => import('../screens/congregtion'),
  loading: () => (<div>Loading...</div>),
});

// authentication
const Authentications = {
  Login: {
    path: '/account/login',
    component: Container,
    label: 'Login',
  },
};

const Jemaat = {
  List: {
    path: '/',
    component: JemaatComponent,
    label: 'Jemaat',
  },
};

const AuthenticationGroups = {
  ...Authentications,
  ...Jemaat,
};

export default AuthenticationGroups;
