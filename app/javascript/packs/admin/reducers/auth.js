const initialState = {
  data: null,
  error: null,
  loading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGNIN_SUCCESS':
      return Object.assign({}, state, { data: action.payload.data });
    default:
      return state;
  }
};

export default auth;
