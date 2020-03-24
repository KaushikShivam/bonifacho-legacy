import axios from 'axios';

import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import { setAlert } from './alert';

export const registerUser = body => async dispatch => {
  try {
    const res = await axios.post('/api/v1/users/signup', body);

    dispatch({ type: REGISTER_SUCCESS, payload: res.data.token });
  } catch (err) {
    console.log('err', err.response.data);

    dispatch(setAlert(err.response.data.message, 'error'));

    dispatch({
      type: REGISTER_FAIL
    });
  }
};
