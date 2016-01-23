/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import travels from './travels';

// Replace line below once you have several reducers with
const rootReducer = combineReducers({
  home: homeReducer,
  travels,
})

export default rootReducer;
