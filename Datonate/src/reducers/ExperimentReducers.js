import {
  PASS_EXPERIMENTS,
  VIEW_EXPERIMENT,
  SORT_EXPERIMENTS_PAY,
  SORT_EXPERIMENTS_TIME,
  FILTER_EXPERIMENTS_LEVEL1,
  FILTER_EXPERIMENTS_LEVEL2,
  FILTER_EXPERIMENTS_LEVEL3,
  FILTER_EXPERIMENTS_LEVEL4
} from '../actions/types';

const INITIAL_STATE = {
  experiments: null,
  proceedExp: 'no',
  sortedExperimentsByPrice: null,
  isSortedByPrice: 'no',
  sortedExperimentsByTime: null,
  isSortedByTime: 'no',
  filterExperimentsLevel1: null,
  isFilteredLevel1: 'no',
  filterExperimentsLevel2: null,
  isFilteredLevel2: 'no',
  filterExperimentsLevel3: null,
  isFilteredLevel3: 'no',
  filterExperimentsLevel4: null,
  isFilteredLevel4: 'no',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PASS_EXPERIMENTS:{
      console.log(action.payload);
      return {...state, experiments: action.payload, proceedExp: 'go', isSortedByPrice: 'no', isSortedByTime: 'no',
      isFilteredLevel1: 'no',
      isFilteredLevel2: 'no',
      isFilteredLevel3: 'no',
      isFilteredLevel4: 'no',
        };
    }
    case VIEW_EXPERIMENT:
      return {...state, currentExperiment: action.payload};
    case SORT_EXPERIMENTS_PAY:{
      return {...state, sortedExperimentsByPrice: action.payload, isSortedByPrice: 'yes', isSortedByTime: 'no',
              isFilteredLevel1: 'no',
              isFilteredLevel2: 'no',
              isFilteredLevel3: 'no',
              isFilteredLevel4: 'no',
              };
    }
    case SORT_EXPERIMENTS_TIME: {
      return {...state, sortedExperimentsByTime: action.payload, isSortedByPrice: 'no', isSortedByTime: 'yes',
              isFilteredLevel1: 'no',
              isFilteredLevel2: 'no',
              isFilteredLevel3: 'no',
              isFilteredLevel4: 'no',
              }
    }
    case FILTER_EXPERIMENTS_LEVEL1: {
      return {...state, filterExperimentsLevel1: action.payload, isSortedByPrice: 'no', isSortedByTime: 'no',
              isFilteredLevel1: 'yes',
              isFilteredLevel2: 'no',
              isFilteredLevel3: 'no',
              isFilteredLevel4: 'no',
              }
    }
    case FILTER_EXPERIMENTS_LEVEL2: {
      return {...state, filterExperimentsLevel2: action.payload, isSortedByPrice: 'no', isSortedByTime: 'no',
              isFilteredLevel1: 'no',
              isFilteredLevel2: 'yes',
              isFilteredLevel3: 'no',
              isFilteredLevel4: 'no',
              }
    }
    case FILTER_EXPERIMENTS_LEVEL3: {
      return {...state, filterExperimentsLevel3: action.payload, isSortedByPrice: 'no', isSortedByTime: 'no',
              isFilteredLevel1: 'no',
              isFilteredLevel2: 'no',
              isFilteredLevel3: 'yes',
              isFilteredLevel4: 'no',
              }
    }
    case FILTER_EXPERIMENTS_LEVEL4: {
      return {...state, filterExperimentsLevel4: action.payload, isSortedByPrice: 'no', isSortedByTime: 'no',
              isFilteredLevel1: 'no',
              isFilteredLevel2: 'no',
              isFilteredLevel3: 'no',
              isFilteredLevel4: 'yes',
              }
    }
    default:
      return state;
  }
}
