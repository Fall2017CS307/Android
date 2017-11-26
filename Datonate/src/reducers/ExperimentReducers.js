import {
  PASS_EXPERIMENTS,
  VIEW_EXPERIMENT,
  SORT_EXPERIMENTS
} from '../actions/types';

const INITIAL_STATE = {
  experiments: null,
  proceedExp: 'no',
  sortedExperiments: null,
  isSortedByPrice: 'no'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PASS_EXPERIMENTS:{
      console.log(action.payload);
      return {...state, experiments: action.payload, proceedExp: 'go'};
    }
    case VIEW_EXPERIMENT:
      return {...state, currentExperiment: action.payload};
    case SORT_EXPERIMENTS:{
      console.log(action.payload);
      return {...state, sortedExperiments: action.payload, isSortedByPrice: 'yes'};
    }
    default:
      return state;
  }
}
