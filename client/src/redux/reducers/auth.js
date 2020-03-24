import { REGISTER_SUCCESS, REGISTER_FAIL } from './../actions/types';

const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};
