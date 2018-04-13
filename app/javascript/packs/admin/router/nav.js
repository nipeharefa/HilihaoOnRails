import { Container } from '../screens/authentication';
import JemaatComponent from '../screens/congregtion';

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
