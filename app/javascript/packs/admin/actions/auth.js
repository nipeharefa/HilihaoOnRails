import { USER_SIGNIN } from '../constants';

export const userSigninAction = (url, params = {}, data = {}) => ({
  type: USER_SIGNIN,
  payload: {
    request: {
      method: 'POST', url, params, data,
    },
  },
});
