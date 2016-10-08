/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import home from './homeReducer';
import travels from './travels';

const rootReducer = combineReducers({
  router,
  home,
  travels,
});

export default rootReducer;
