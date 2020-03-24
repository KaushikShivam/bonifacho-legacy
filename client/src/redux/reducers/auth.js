import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR
} from './../actions/types';

const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('jwt', payload);
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem('jwt');
      return { ...state, token: null, isAuthenticated: false, loading: false };
    case USER_LOADED:
      return { ...state, isAuthenticated: true, loading: false, user: payload };
    default:
      return state;
  }
};

export default authReducer;
