import {
  GET_BATCHES,
  GET_PAST_BATCHES
} from '../actions/types';

export const getBatches = (userID) => {
  return (dispatch) => {
    var qur = "http://datonate.com:5000/api/" + userID + "/batchList";
    fetch(qur)
    .then(function(response){
      response.text().then(function(responseText){
        console.log(responseText);
        var js = JSON.parse(responseText);
        console.log(js.batches);
        getUserBatches(dispatch, js.batches);
      })
    }).catch(function(error){
      console.log(error);
    });
  };
};

export const getPastExps = (userID) => {
  return (dispatch) => {
    var qur = "http://datonate.com:5000/api/getPastExperiments/" + userID;
    fetch(qur)
    .then(function(response){
      response.text().then(function(responseText){
        console.log(responseText);
        var js = JSON.parse(responseText);
        getPastBatches(dispatch, js.batches);
      })
    }).catch(function(error){
      console.log(error);
    });
  };
};

const getPastBatches = (dispatch, batches) => {
  dispatch ({
    type: GET_PAST_BATCHES,
    payload: batches
  });
};

const getUserBatches = (dispatch, batches) => {
  console.log(batches);
  dispatch ({
    type: GET_BATCHES,
    payload: batches
  });
};
