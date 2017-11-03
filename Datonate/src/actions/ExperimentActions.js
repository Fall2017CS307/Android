import {
  PASS_EXPERIMENTS,
} from '../actions/types'

export const viewExperiments = (id) => {
  return(dispatch) => {
    console.log(id);
  var qur = "http://datonate.com:5000/api/getExperiments/" + id;

  fetch(qur)
  .then(function(response){
    response.text().then(function(responseText){
      console.log(responseText);
      passExperiments(dispatch, JSON.parse(responseText).experiments);
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

export const selectExperiment = (dispatch, id) => {
  return(dispatch)=> {

  };
}
