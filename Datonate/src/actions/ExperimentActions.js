import {
  PASS_EXPERIMENTS,
  VIEW_EXPERIMENT
} from '../actions/types';
import { Actions } from 'react-native-router-flux';

export const viewExperiments = (id) => {
  return(dispatch) => {
    //console.log(id);
  var qur = "http://datonate.com:5000/api/getExperiments/" + id;

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

export const assignExperiment = (userID, experimentID) => {
  return (dispatch) => {
    var qur = "http://datonate.com:5000/api/" + userID + "/assign/" + experimentID;
    fetch(qur)
    .then(function(response){
        response.text().then(function(responseText){
          console.log(JSON.parse(responseText))
        })
    }).catch(function(error){
      console.log(error);
    });
  };
};
