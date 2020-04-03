import { CREATE_ARTWORK } from './../actions/types';

const INITIAL_STATE = {};

const artworkReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ARTWORK:
    default:
      return state;
  }
};

export default artworkReducer;
