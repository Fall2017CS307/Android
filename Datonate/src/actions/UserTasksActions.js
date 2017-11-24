import {
  GET_BATCHES,
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

const getUserBatches = (dispatch, batches) => {
  console.log(batches);
  dispatch ({
    type: GET_BATCHES,
    payload: batches
  });
};
