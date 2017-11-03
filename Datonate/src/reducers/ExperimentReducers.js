import {
  PASS_EXPERIMENTS,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  firstName: '',
  experiments: null,
  proceedExp: 'no'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PASS_EXPERIMENTS:
      return {...state, experiments: action.payload, proceedExp: 'go'};

    default:
      return state;
  }
}
