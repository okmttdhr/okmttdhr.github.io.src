import { SELECT_PLACE } from '../constants/AppConstants';

export function selectPlace(name) {
  return { type: SELECT_PLACE, name };
}
