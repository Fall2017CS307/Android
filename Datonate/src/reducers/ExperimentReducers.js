import {
  PASS_EXPERIMENTS,
  VIEW_EXPERMENT
} from '../actions/types';

const INITIAL_STATE = {
  experiments: null,
  proceedExp: 'no'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PASS_EXPERIMENTS:
      return {...state, experiments: action.payload, proceedExp: 'go'};
    case VIEW_EXPERMENT:
      return {...state, currentExperiment: action.payload};

    default:
      return state;
  }
}
