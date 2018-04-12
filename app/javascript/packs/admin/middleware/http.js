import axiosMiddleware from 'redux-axios-middleware';
import axios from '../utils/axios';
// import { validToken } from '../../utils/jwt';

const axiosMiddlewareOptions = {
  returnRejectedPromiseOnError: true,
  interceptors: {
    request: [
      (state, config) => {
        const token =
          (state.getState().auth.data &&
            state.getState().auth.data.jwt) ||
          null;
        if (token) {
          Object.assign(config, { headers: { Authorization: `Bearer ${token}` } });
        }
        return config;
      },
    ],
  },
};

export default axiosMiddleware(axios, axiosMiddlewareOptions);
