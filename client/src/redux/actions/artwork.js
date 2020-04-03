import axios from 'axios';
import { CREATE_ARTWORK } from './types';
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
