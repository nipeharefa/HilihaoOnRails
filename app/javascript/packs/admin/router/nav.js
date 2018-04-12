import { Container } from '../screens/authentication';

// authentication
const Authentications = {
  Login: {
    path: '/account/login',
    component: Container,
    label: 'Login',
  },
};

const AuthenticationGroups = {
  ...Authentications,
};

export default AuthenticationGroups;
