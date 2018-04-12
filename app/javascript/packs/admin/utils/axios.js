import axios from 'axios';

// axios.defaults.baseURL = window.location.origin
axios.defaults.timeout = 15000;
axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  Accept: 'application/json',
};

export default axios;
