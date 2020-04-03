import { combineReducers } from 'redux';

import alert from './alert';
import auth from './auth';
import artwork from './artwork';

const rootReducer = combineReducers({
  alert,
  auth,
  artwork
});

export default rootReducer;
