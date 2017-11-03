import {
  PASS_EXPERIMENTS,
} from '../actions/types'

export const viewExperiments = () => {
  return(dispatch) => {
  var url = "http://datonate.com:5000/api/getExperiments";

  fetch(url)
  .then(function(response){
    var resp = response.json();


    passExperiments(dispatch, resp);
  }).catch(function(error){
    console.log(error);
  });
  };
};

const passExperiments = (dispatch, response) => {
  console.log("In ExpList Line 22");
  console.log(response);
  return {
    type: PASS_EXPERIMENTS,
    payload: response
  };
};
