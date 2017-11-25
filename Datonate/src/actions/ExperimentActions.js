import {
  PASS_EXPERIMENTS,
  VIEW_EXPERIMENT,
  SORT_EXPERIMENTS
} from '../actions/types';
import { Actions } from 'react-native-router-flux';

export const viewExperiments = (id) => {
  return(dispatch) => {
    //console.log(id);
  var qur = "http://datonate.com:5000/api/getExperiments/" + id;
  //console.log(qur);

  fetch(qur)
  .then(function(response){
    response.text().then(function(responseText){
      //console.log(responseText);
      //console.log("Error ke Pehle");
      passExperiments(dispatch, JSON.parse(responseText).experiments);
      //console.log("Error ke baad");
    })
  }).catch(function(error){
    console.log(error);
  });
  };
};

export const sortExperiments = (experiments) => {
  return(dispatch) => {
    function compare(a,b) {
      if (a.price < b.price)
        return 1;
      if (a.price > b.price)
        return -1;
      return 0;
    }

    experiments.sort(compare);
    console.log(experiments);
    changeExpDisplay(dispatch, experiments);
  };
};

const changeExpDisplay = (dispatch, experiments) => {
  console.log(experiments);
  dispatch ( {
    type: SORT_EXPERIMENTS,
    payload: experiments
  });
}

const passExperiments = (dispatch, response) => {
  //console.log(response);
  dispatch( {
    type: PASS_EXPERIMENTS,
    payload: response
  });
};

export const selectExperiment = (experiment) => {
  console.log(experiment);
  return(dispatch)=> {
    console.log("SE");
    addExpToState(dispatch, experiment);
    Actions.viewExperiment();
  };
};


const addExpToState = (dispatch, experiment) => {
  console.log("AETS");
  console.log(experiment);
  dispatch({
    type: VIEW_EXPERIMENT,
    payload: experiment
  });
};
