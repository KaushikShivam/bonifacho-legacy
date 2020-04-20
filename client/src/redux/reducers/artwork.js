import {
  CREATE_ARTWORK,
  GET_USER_ARTWORKS,
  CLEAR_USER_ARTWORKS,
  DELETE_ARTWORK,
  GET_ARTWORK,
  CLEAR_ARTWORK,
  UPDATE_ARTWORK,
  GET_USER_ARTWORKS_CATEGORIES,
} from './../actions/types';

const INITIAL_STATE = {
  userArtworks: [],
  artwork: null,
  artworkCategories: [],
};

const artworkReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_ARTWORKS:
      return { ...state, userArtworks: payload };
    case GET_USER_ARTWORKS_CATEGORIES:
      return { ...state, artworkCategories: payload };
    case CLEAR_USER_ARTWORKS:
      return { ...state, userArtworks: [] };
    case DELETE_ARTWORK:
      return {
        ...state,
        userArtworks: state.userArtworks.filter(
          (artwork) => artwork.id !== payload
        ),
      };
    case CLEAR_ARTWORK:
      return { ...state, artwork: null };
    case GET_ARTWORK:
      return { ...state, artwork: payload };
    case UPDATE_ARTWORK:
      return {
        ...state,
        userArtworks: state.userArtworks.map((artwork) =>
          artwork.id === payload.id ? payload : artwork
        ),
      };
    case CREATE_ARTWORK:
    default:
      return state;
  }
};

export default artworkReducer;
