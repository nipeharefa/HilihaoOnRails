import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginScreen from './login';
import { userSignin } from '../../repositories/auth';

const mapDispatchToProps = (dispatch) => ({
  userSignin(...props) {
    return dispatch(userSignin(...props));
  },
});

const LoginScreenWrapped = connect(null, mapDispatchToProps)(LoginScreen);

export default withRouter(LoginScreenWrapped);
