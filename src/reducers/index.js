import { combineReducers } from 'redux';

import core from '../core/reducer';

const allReducers = combineReducers({
  core,
});

export default allReducers;
