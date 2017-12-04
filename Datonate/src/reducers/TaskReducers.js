import {
  STORE_FILES,
  DESC_CHANGED,
  UPDATE_INDEX,
  UPDATE_FILES
} from '../actions/types';

const INITIAL_STATE = {
  experiments: null,
  proceedExp: 'no',
  index: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_FILES:
      return {...state, files: action.payload};
    case DESC_CHANGED:
      return {...state, desc:action.payload}
    case UPDATE_FILES:
      return {...state, files:action.payload}
    case UPDATE_INDEX:
      return {...state, index:action.payload}
    default:
      return state;
  }
}
