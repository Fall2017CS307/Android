import {
  STORE_FILES,
  DESC_CHANGED,
  UPDATE_INDEX,
  UPDATE_FILES,
  SAVE_BATCH_ID
} from '../actions/types';
import { Actions } from 'react-native-router-flux';

export const assignExperiment = (userID, experimentID) => {
  console.log("IN 1");
  return (dispatch) => {
    var qur = "http://datonate.com:5000/api/" + userID + "/assign/" + experimentID;
    fetch(qur)
    .then(function(response){
        response.text().then(function(responseText){
          var res = JSON.parse(responseText);
          if(res.status == 200){
            console.log(res);
            var batchID = res.batch_id;
            saveBatchID(dispatch, batchID);
            console.log(batchID);
            var qur1 = "http://datonate.com:5000/api/" + batchID + "/getBatch";
            console.log(qur1);
            fetch(qur1)
            .then(function(response){
                response.text().then(function(resText){
                  var res1 = JSON.parse(resText);
                  console.log(res1);
                  var files = res1.files;
                  console.log(files);
                  storeFiles(dispatch, files);
                  Actions.textAnnotation();
                })
            }).catch(function(error){
              console.log(error);
            });
          }

        })
    }).catch(function(error){
      console.log(error);
    });
  };
};

const saveBatchID = (dispatch, batchID) => {
  dispatch ({
    type: SAVE_BATCH_ID,
    payload: batchID
  });
};

const storeFiles = (dispatch, files) => {
  dispatch ({
    type: STORE_FILES,
    payload: files
  });
};

export const descChanged = (text) => {
  return {
    type: DESC_CHANGED,
    payload: text
  };
};

export const changeFiles = (files) => {
  return (dispatch) => {
    updateIndex(dispatch, files);
  };
};

const updateFiles = (dispatch, index) => {
  dispatch ({
    type: UPDATE_FILES,
    payload: index
  });
};
export const changeIndex = (index) => {
  return (dispatch) => {
    updateIndex(dispatch, index);
    Actions.dummy();
  };
};

const updateIndex = (dispatch, index) => {
  dispatch ({
    type: UPDATE_INDEX,
    payload: index
  });
};

export const sendData = (imageData, imageText, batchID) => {
  return (dispatch) => {
    var qur = "http://datonate.com:5000/api/submitBatchRowImage/" + batchID;
    var req = new Request(qur, {method:'POST', body: JSON.stringify({
      imageText: imageText,
      imageData: imageData
    })})
    fetch(req)
    .then(function(response){
      console.log(response);
    })
    .catch(function(response){

    });
  };
};
