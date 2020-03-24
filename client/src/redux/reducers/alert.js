import { SET_ALERT, REMOVE_ALERT } from './../actions/types';

const INITIAL_STATE = {};

const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return {};
    default:
      return state;
  }
};

export default alertReducer;
