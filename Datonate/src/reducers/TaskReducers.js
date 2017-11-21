import {
  STORE_FILES,
} from '../actions/types';

const INITIAL_STATE = {
  experiments: null,
  proceedExp: 'no'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_FILES:
      return {...state, files: action.payload};
    default:
      return state;
  }
}
