import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (message, type) => dispatch => {
  dispatch({
    type: SET_ALERT,
    payload: { message, type }
  });
};
