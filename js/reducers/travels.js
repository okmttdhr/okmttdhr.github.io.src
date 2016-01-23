import { SELECT_PLACE } from '../constants/AppConstants';
import { travels } from './initialState';

const initialState = travels;

function travelsReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: action.name
      };
    default:
      return state;
  }
}

export default travelsReducer;
