import { userSigninAction } from '../actions/auth';

export const userSignin = (
  routeParams = {}, // eslint-disable-line
  params = {},
  data = {}
) => (dispatch) => {
  const url = '/user_token';
  return dispatch(userSigninAction(url, params, data));
};
