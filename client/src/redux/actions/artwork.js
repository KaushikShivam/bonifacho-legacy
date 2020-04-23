import axios from 'axios';
import {
  CREATE_ARTWORK,
  GET_USER_ARTWORKS,
  CLEAR_USER_ARTWORKS,
  DELETE_ARTWORK,
  GET_ARTWORK,
  CLEAR_ARTWORK,
  UPDATE_ARTWORK,
  GET_USER_ARTWORKS_CATEGORIES,
  GET_ALL_ARTWORKS,
  GET_ARTWORK_WEEK,

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
    const res = await axios.get('/api/v1/artworks/my-artworks');
    dispatch({ type: GET_USER_ARTWORKS, payload: res.data.data.artworks });
  } catch (err) {
    dispatch(setAlert('No Artworks found', 'error'));
  }
};

export const getWeeklyArtworks = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/artworks/artwork-week');
    dispatch({ type: GET_ARTWORK_WEEK, payload: res.data.data.artworks });
  } catch (err) {
    dispatch(setAlert('No Artworks found', 'error'));
  }
};

export const getAllArtworks = () => async (dispatch) => {
  dispatch({ type: CLEAR_USER_ARTWORKS });
  try {
    const res = await axios.get('/api/v1/artworks');
    dispatch({ type: GET_ALL_ARTWORKS, payload: res.data.data.artworks });
  } catch (err) {
    dispatch(setAlert('No Artworks found', 'error'));
  }
};

export const getArtworksWithCategories = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/artworks/category-artworks');
    dispatch({
      type: GET_USER_ARTWORKS_CATEGORIES,
      payload: res.data.data.artworks,
    });
  } catch (err) {
    dispatch(setAlert('No Artworks found', 'error'));
  }
};

export const getArtwork = (id) => async (dispatch) => {
  dispatch({ type: CLEAR_ARTWORK });

  try {
    const res = await axios.get(`/api/v1/artworks/${id}`);
    dispatch({ type: GET_ARTWORK, payload: res.data.data.artwork });
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'error'));
  }
};

export const updateArtwork = (id, body) => async (dispatch) => {
  dispatch({ type: CLEAR_ARTWORK });

  try {
    const res = await axios.patch(`/api/v1/artworks/${id}`, body);
    dispatch({ type: UPDATE_ARTWORK, payload: res.data.data.artwork });
    dispatch(setAlert('Artwork updated!', 'success'));

    return Promise.resolve();
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'error'));
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
