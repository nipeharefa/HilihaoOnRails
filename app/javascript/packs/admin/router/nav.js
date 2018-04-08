import { LoginScreen } from '../screens/authentication';

// authentication
const Authentications = {
  Login: {
    path: '/account/login',
    component: LoginScreen,
    label: 'Login',
  },
};

const AuthenticationGroups = {
  ...Authentications,
};

export default AuthenticationGroups;
