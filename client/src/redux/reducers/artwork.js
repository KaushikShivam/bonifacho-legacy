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
  GET_ARTWORK_WEEK
} from './../actions/types';

const INITIAL_STATE = {
  artworks: [],
  userArtworks: [],
  artwork: null,
  artworkCategories: [],
  artworkWeek: []
};

const artworkReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_ARTWORKS:
      return { ...state, userArtworks: payload };
    case GET_ALL_ARTWORKS:
      return { ...state, artworks: payload };
    case GET_USER_ARTWORKS_CATEGORIES:
      return { ...state, artworkCategories: payload };
    case GET_ARTWORK_WEEK:
      return { ...state, artworkWeek: payload }
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
