import {
  STORE_FILES,
  DESC_CHANGED,
  UPDATE_INDEX,
  UPDATE_FILES,
  SAVE_BATCH_ID,
  CLEAR_TASK,
  TEXT_DESC_CHANGED,
  CLEAR_DESC,
  CLEAR_TEXT_DESC
} from '../actions/types';

const INITIAL_STATE = {
  experiments: null,
  proceedExp: 'no',
  index: 0,
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
    case SAVE_BATCH_ID:
      return {...state, batchID:action.payload}
    case TEXT_DESC_CHANGED:
      return {...state, textDesc:action.payload}
    case CLEAR_TASK:
      return {...state, files:null, index:0, textDesc:'', desc:'',batchID:0}
    case CLEAR_DESC:
      return {...state, desc:''}
    case CLEAR_TEXT_DESC:
      return {...state, textDesc:''}
    default:
      return state;
  }
}
