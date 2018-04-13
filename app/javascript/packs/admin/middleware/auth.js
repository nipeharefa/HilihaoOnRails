import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { validToken } from '../utils/jwt';
const locationHelper = locationHelperBuilder();

/**
 * Scope User authenticted
 */
export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/account/login',
  allowRedirectBack: true,
  wrapperDisplayName: 'UserIsAuthenticated',
  authenticatedSelector: (state) => state.auth.data !== null && validToken(state.auth.data.access_token),
});

/**
 * Scope Guest
*/
export const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, props) => locationHelper.getRedirectQueryParam(props) || '/',
  allowRedirectBack: false,
  authenticatedSelector: (state) => state.auth.data === null || !validToken(state.auth.data.access_token),
  wrapperDisplayName: 'UserIsNotAuthenticated',
});
