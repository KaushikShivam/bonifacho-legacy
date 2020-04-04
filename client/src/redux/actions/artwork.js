import axios from 'axios';
import {
  CREATE_ARTWORK,
  GET_USER_ARTWORKS,
  CLEAR_USER_ARTWORKS,
  DELETE_ARTWORK,
} from './types';
import { setAlert } from './alert';

export const createArtwork = (body) => async (dispatch) => {
  try {
    await axios.post('/api/v1/artworks', body);

    dispatch({
      type: CREATE_ARTWORK,
    });

    dispatch(setAlert('Artwork Created!', 'success'));

    return Promise.resolve();
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'error'));
  }
};

export const getUserArtworks = () => async (dispatch) => {
  dispatch({ type: CLEAR_USER_ARTWORKS });
  try {
    const res = await axios.get('/api/v1/artworks/get-my-artworks');
    dispatch({ type: GET_USER_ARTWORKS, payload: res.data.data.artworks });
  } catch (err) {
    dispatch(setAlert('No Artworks found', 'error'));
  }
};

export const deleteArtwork = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/v1/artworks/${id}`);

    dispatch({
      type: DELETE_ARTWORK,
      payload: id,
    });

    dispatch(setAlert('Delete successfull', 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'error'));
  }
};
