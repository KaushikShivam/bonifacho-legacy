import axios from 'axios';
import {
  CREATE_ARTWORK,
  GET_USER_ARTWORKS,
  CLEAR_USER_ARTWORKS
} from './types';
import { setAlert } from './alert';

export const createArtwork = body => async dispatch => {
  try {
    await axios.post('/api/v1/artworks', body);

    dispatch({
      type: CREATE_ARTWORK
    });

    dispatch(setAlert('Artwork Created!', 'success'));

    return Promise.resolve();
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'error'));
  }
};

export const getUserArtworks = () => async dispatch => {
  dispatch({ type: CLEAR_USER_ARTWORKS });
  try {
    const res = await axios.get('/api/v1/artworks/get-my-artworks');
    console.log(res.data);
    dispatch({ type: GET_USER_ARTWORKS, payload: res.data.data.artworks });
  } catch (err) {
    console.log(err.response.data);
    dispatch(setAlert('No Artworks found', 'error'));
  }
};
