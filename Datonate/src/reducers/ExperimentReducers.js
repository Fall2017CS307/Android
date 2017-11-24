import {
  PASS_EXPERIMENTS,
  VIEW_EXPERIMENT
} from '../actions/types';

const INITIAL_STATE = {
  experiments: null,
  proceedExp: 'no'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PASS_EXPERIMENTS:{
      console.log("IN WHAT");
      return {...state, experiments: action.payload, proceedExp: 'go'};
    }
    case VIEW_EXPERIMENT:
      return {...state, currentExperiment: action.payload};

    default:
      return state;
  }
}
