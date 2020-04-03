import {
  CREATE_ARTWORK,
  GET_USER_ARTWORKS,
  CLEAR_USER_ARTWORKS
} from './../actions/types';

const INITIAL_STATE = {
  userArtworks: []
};

const artworkReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_ARTWORKS:
      return { ...state, userArtworks: payload };
    case CLEAR_USER_ARTWORKS:
      return { ...state, userArtworks: [] };
    case CREATE_ARTWORK:
    default:
      return state;
  }
};

export default artworkReducer;
