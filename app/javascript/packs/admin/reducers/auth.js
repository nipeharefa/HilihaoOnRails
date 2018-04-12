const initialState = {
  data: null,
  error: null,
  loading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGNIN_SUCCESS':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default auth;
