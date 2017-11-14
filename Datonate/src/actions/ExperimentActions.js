import {
  PASS_EXPERIMENTS,
  VIEW_EXPERMENT
} from '../actions/types';
import { Actions } from 'react-native-router-flux';

export const viewExperiments = (id) => {
  return(dispatch) => {
    console.log(id);
  var qur = "http://datonate.com:5000/api/getExperiments/" + id;

  fetch(qur)
  .then(function(response){
    response.text().then(function(responseText){
      //console.log(responseText);
      console.log("Error ke Pehle");
      passExperiments(dispatch, JSON.parse(responseText).experiments);
      console.log("Error ke baad");
    })
  }).catch(function(error){
    console.log(error);
  });
  };
};

const passExperiments = (dispatch, response) => {
  console.log(response);
  dispatch( {
    type: PASS_EXPERIMENTS,
    payload: response
  });
};

export const selectExperiment = (dispatch, experiment) => {
  return(dispatch)=> {
    Actions.viewExperiment();
    addExpToState(dispatch, experiment);
  };
};


const addExpToState = (dispatch, experiment) => {
  dispatch({
    type: VIEW_EXPERMENT,
    payload: experiment
  });
};
